import type { GroqAnalysis, LeadPayload } from "./types";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const SYSTEM_PROMPT = `Je bent assistent van Van Waes Schilderwerken, een schildersbedrijf in Oostende. Analyseer leads en antwoord ALLEEN met geldige JSON, geen tekst errond, geen markdown.`;

function buildUserPrompt(lead: LeadPayload): string {
  return `Analyseer deze aanvraag en geef terug als JSON:
{
  "prioriteit": "hoog" | "medium" | "laag",
  "reden_prioriteit": "string (max 1 zin)",
  "geschatte_projectgrootte": "klein" | "middel" | "groot",
  "aanbevolen_reactietijd": "string (bv. binnen 2u)",
  "slimme_opmerking": "string (persoonlijke tip voor Van Waes)",
  "voorgestelde_sms": "string (kant-en-klare SMS van max 160 tekens, informeel en vriendelijk)"
}
Lead: ${JSON.stringify(lead)}`;
}

function parseGroqJson(content: string): GroqAnalysis | null {
  const trimmed = content.trim();
  const jsonText = trimmed
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    const parsed = JSON.parse(jsonText) as GroqAnalysis;
    if (
      !parsed.prioriteit ||
      !parsed.geschatte_projectgrootte ||
      !parsed.voorgestelde_sms
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export async function analyzeLead(
  lead: LeadPayload,
): Promise<GroqAnalysis | null> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("[leads] GROQ_API_KEY ontbreekt");
    return null;
  }

  try {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: buildUserPrompt(lead) },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[leads] Groq mislukt:", res.status, err);
      return null;
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      console.error("[leads] Groq: leeg antwoord");
      return null;
    }

    const analysis = parseGroqJson(content);
    if (!analysis) {
      console.error("[leads] Groq: ongeldige JSON", content);
    }
    return analysis;
  } catch (error) {
    console.error("[leads] Groq error:", error);
    return null;
  }
}
