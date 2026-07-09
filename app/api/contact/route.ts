import { createLeadRecord, patchLeadAnalysis } from "@/app/lib/leads/airtable";
import {
  sendCustomerConfirmation,
  sendOwnerNotification,
} from "@/app/lib/leads/mailer";
import { analyzeLead } from "@/app/lib/leads/groq";
import { WORK_TYPES, type LeadPayload, type WorkType } from "@/app/lib/leads/types";

const MAX_FIELD_LENGTHS = {
  naam: 120,
  telefoon: 40,
  email: 160,
  gemeente: 120,
  omschrijving: 2500,
} as const;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function okResponse() {
  return Response.json({
    success: true,
    message: "Aanvraag ontvangen, we contacteren u binnen 24u",
  });
}

function normalizeText(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizeTextarea(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function isHoneypotTriggered(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const data = body as Record<string, unknown>;
  return String(data.website ?? "").trim().length > 0;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowed = new Set<string>();

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    allowed.add(process.env.NEXT_PUBLIC_SITE_URL);
  }

  allowed.add("http://localhost:3000");
  allowed.add("http://127.0.0.1:3000");

  return allowed.has(origin);
}

function parseLead(body: unknown): LeadPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const naam = normalizeText(data.naam, MAX_FIELD_LENGTHS.naam);
  const telefoon = normalizeText(data.telefoon, MAX_FIELD_LENGTHS.telefoon);
  const email = normalizeText(data.email, MAX_FIELD_LENGTHS.email).toLowerCase();
  const typeWerk = normalizeText(data.typeWerk, 80) as WorkType;
  const gemeente = normalizeText(data.gemeente, MAX_FIELD_LENGTHS.gemeente);
  const omschrijving = normalizeTextarea(
    data.omschrijving,
    MAX_FIELD_LENGTHS.omschrijving,
  );

  if (!naam || !email || !gemeente || !telefoon) return null;
  if (!WORK_TYPES.includes(typeWerk)) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!/^[0-9+()\-/\s.]{6,40}$/.test(telefoon)) return null;

  return {
    naam,
    telefoon,
    email,
    typeWerk,
    gemeente,
    omschrijving,
  };
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    console.error("[leads] Geblokkeerde origin:", request.headers.get("origin"));
    return okResponse();
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    console.error("[leads] Rate limit actief voor:", ip);
    return okResponse();
  }

  try {
    const body = await request.json();

    if (isHoneypotTriggered(body)) {
      console.error("[leads] Honeypot getriggerd");
      return okResponse();
    }

    const lead = parseLead(body);

    if (!lead) {
      console.error("[leads] Ongeldige formulierdata:", body);
    } else {
      const record = await createLeadRecord(lead);

      const analysis = await analyzeLead(lead);
      if (record && analysis) {
        await patchLeadAnalysis(record.id, analysis);
      }

      await sendCustomerConfirmation(lead);
      await sendOwnerNotification(lead, analysis, record?.url ?? null);
    }
  } catch (error) {
    console.error("[leads] Onverwachte fout:", error);
  }

  return okResponse();
}
