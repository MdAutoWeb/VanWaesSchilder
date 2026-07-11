import type { Transporter } from "nodemailer";
import type { GroqAnalysis, LeadPayload } from "./types";
import { BUSINESS, SITE_URL } from "../site";
import {
  createSmtpTransporter,
  formatSmtpError,
  getSmtpConfig,
} from "./smtp";

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const smtp = getSmtpConfig();
  if (!smtp.ok) {
    console.error("[leads] SMTP config ontbreekt:", {
      missing: smtp.missing,
    });
    return null;
  }

  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = createSmtpTransporter(smtp.config);
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
  const smtp = getSmtpConfig();
  if (!smtp.ok) {
    console.error("[leads] SMTP send overgeslagen, config ontbreekt:", smtp.missing);
    return false;
  }

  const transporter = getTransporter();
  if (!transporter) return false;

  const fromAddress = smtp.config.from;

  console.log("[leads] SMTP verzenden start:", {
    host: smtp.config.host,
    port: smtp.config.port,
    secure: smtp.config.secure,
    requireTLS: smtp.config.requireTLS,
    from: fromAddress,
    to: payload.to,
    subject: payload.subject,
  });

  try {
    const info = await transporter.sendMail({
      from: `"${payload.fromName}" <${fromAddress}>`,
      to: payload.toName ? `"${payload.toName}" <${payload.to}>` : payload.to,
      subject: payload.subject,
      text: payload.text,
      replyTo: payload.replyTo,
    });

    console.log("[leads] SMTP verzonden:", {
      to: payload.to,
      subject: payload.subject,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });
    return true;
  } catch (error) {
    console.error("[leads] SMTP verzenden mislukt:", {
      to: payload.to,
      subject: payload.subject,
      ...formatSmtpError(error),
    });
    return false;
  }
}

export async function sendCustomerConfirmation(lead: LeadPayload): Promise<boolean> {
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

  return sendMail({
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
): Promise<boolean> {
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

  return sendMail({
    fromName: "Van Waes Website",
    to: BUSINESS.email,
    toName: "Van Waes Schilderwerken",
    subject: `🎨 Nieuwe aanvraag — ${lead.naam} (${lead.gemeente})`,
    text,
    replyTo: lead.email,
  });
}
