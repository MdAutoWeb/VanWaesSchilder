import nodemailer, { type Transporter } from "nodemailer";
import type { GroqAnalysis, LeadPayload } from "./types";
import { BUSINESS, SITE_URL } from "../site";

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!host || !user || !pass) {
    console.error("[leads] SMTP config ontbreekt");
    return null;
  }

  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return cachedTransporter;
}

async function sendMail(payload: {
  to: string;
  toName?: string;
  fromName: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) return false;

  const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER!;

  try {
    await transporter.sendMail({
      from: `"${payload.fromName}" <${fromAddress}>`,
      to: payload.toName ? `"${payload.toName}" <${payload.to}>` : payload.to,
      subject: payload.subject,
      text: payload.text,
      replyTo: payload.replyTo,
    });
    return true;
  } catch (error) {
    console.error("[leads] SMTP verzenden mislukt:", error);
    return false;
  }
}

export async function sendCustomerConfirmation(lead: LeadPayload): Promise<void> {
  const text = `Beste ${lead.naam},

Bedankt voor uw aanvraag. Ik neem zo snel mogelijk contact met u op — normaal gezien binnen de 24 uur.

Uw aanvraag:
Type werk: ${lead.typeWerk}
Gemeente: ${lead.gemeente}
Omschrijving: ${lead.omschrijving || "—"}

Met vriendelijke groeten,
Van Waes Schilderwerken
${BUSINESS.phoneDisplay}
${SITE_URL.replace(/^https?:\/\//, "")}`;

  await sendMail({
    fromName: "Van Waes Schilderwerken",
    to: lead.email,
    toName: lead.naam,
    subject: "Uw aanvraag bij Van Waes Schilderwerken",
    text,
  });
}

export async function sendOwnerNotification(
  lead: LeadPayload,
  analysis: GroqAnalysis | null,
  airtableUrl: string | null,
): Promise<void> {
  const aiBlock = analysis
    ? `
── AI ANALYSE ──
Prioriteit: ${analysis.prioriteit} — ${analysis.reden_prioriteit}
Projectgrootte: ${analysis.geschatte_projectgrootte}
Reageer: ${analysis.aanbevolen_reactietijd}

💡 ${analysis.slimme_opmerking}

📱 Klaar-om-te-sturen SMS:
"${analysis.voorgestelde_sms}"`
    : `
── AI ANALYSE ──
(niet beschikbaar)`;

  const airtableLine = airtableUrl
    ? `\nBekijk in Airtable: ${airtableUrl}`
    : "";

  const text = `Naam: ${lead.naam}
Telefoon: ${lead.telefoon}
Email: ${lead.email}
Type werk: ${lead.typeWerk}
Gemeente: ${lead.gemeente}
Omschrijving: ${lead.omschrijving || "—"}
${aiBlock}${airtableLine}`;

  await sendMail({
    fromName: "Van Waes Website",
    to: BUSINESS.email,
    toName: "Van Waes Schilderwerken",
    subject: `🎨 Nieuwe aanvraag — ${lead.naam} (${lead.gemeente})`,
    text,
    replyTo: lead.email,
  });
}
