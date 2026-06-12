import type { GroqAnalysis, LeadPayload } from "./types";
import { BUSINESS, SITE_URL } from "../site";

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";

async function sendBrevoMail(payload: {
  to: { email: string; name?: string }[];
  sender: { email: string; name: string };
  subject: string;
  textContent: string;
}): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("[leads] BREVO_API_KEY ontbreekt");
    return false;
  }

  try {
    const res = await fetch(BREVO_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[leads] Brevo mislukt:", res.status, err);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[leads] Brevo error:", error);
    return false;
  }
}

export async function sendCustomerConfirmation(lead: LeadPayload): Promise<void> {
  const textContent = `Beste ${lead.naam},

Bedankt voor uw aanvraag. Ik neem zo snel mogelijk contact met u op — normaal gezien binnen de 24 uur.

Uw aanvraag:
Type werk: ${lead.typeWerk}
Gemeente: ${lead.gemeente}
Omschrijving: ${lead.omschrijving || "—"}

Met vriendelijke groeten,
Van Waes Schilderwerken
${BUSINESS.phoneDisplay}
${SITE_URL.replace(/^https?:\/\//, "")}`;

  await sendBrevoMail({
    sender: { name: "Van Waes Schilderwerken", email: BUSINESS.email },
    to: [{ email: lead.email, name: lead.naam }],
    subject: "Uw aanvraag bij Van Waes Schilderwerken",
    textContent,
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

  const textContent = `Naam: ${lead.naam}
Telefoon: ${lead.telefoon}
Email: ${lead.email}
Type werk: ${lead.typeWerk}
Gemeente: ${lead.gemeente}
Omschrijving: ${lead.omschrijving || "—"}
${aiBlock}${airtableLine}`;

  await sendBrevoMail({
    sender: { name: "Van Waes Website", email: "noreply@webamo.be" },
    to: [{ email: BUSINESS.email, name: "Van Waes Schilderwerken" }],
    subject: `🎨 Nieuwe aanvraag — ${lead.naam} (${lead.gemeente})`,
    textContent,
  });
}
