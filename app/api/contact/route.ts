import { createLeadRecord, patchLeadAnalysis } from "@/app/lib/leads/airtable";
import {
  sendCustomerConfirmation,
  sendOwnerNotification,
} from "@/app/lib/leads/mailer";
import { analyzeLead } from "@/app/lib/leads/groq";
import { WORK_TYPES, type LeadPayload, type WorkType } from "@/app/lib/leads/types";

function parseLead(body: unknown): LeadPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const naam = String(data.naam ?? "").trim();
  const telefoon = String(data.telefoon ?? "").trim();
  const email = String(data.email ?? "").trim();
  const typeWerk = String(data.typeWerk ?? "").trim() as WorkType;
  const gemeente = String(data.gemeente ?? "").trim();
  const omschrijving = String(data.omschrijving ?? "").trim();

  if (!naam || !email || !gemeente) return null;
  if (!WORK_TYPES.includes(typeWerk)) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

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
  try {
    const body = await request.json();
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

  return Response.json({
    success: true,
    message: "Aanvraag ontvangen, we contacteren u binnen 24u",
  });
}
