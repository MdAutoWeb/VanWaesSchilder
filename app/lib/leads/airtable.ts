import type { AirtableRecord, GroqAnalysis, LeadPayload } from "./types";

const AIRTABLE_API = "https://api.airtable.com/v0";

function getConfig() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;
  return { apiKey, baseId, tableId };
}

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function recordUrl(baseId: string, tableId: string, recordId: string): string {
  return `https://airtable.com/${baseId}/${tableId}/${recordId}`;
}

function capitalizeSelect(value: string): string {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export async function createLeadRecord(
  lead: LeadPayload,
): Promise<AirtableRecord | null> {
  const { apiKey, baseId, tableId } = getConfig();
  if (!apiKey || !baseId || !tableId) {
    console.error("[leads] Airtable config ontbreekt");
    return null;
  }

  try {
    const res = await fetch(`${AIRTABLE_API}/${baseId}/${tableId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Naam: lead.naam,
          Telefoon: lead.telefoon,
          Email: lead.email,
          "Type werk": lead.typeWerk,
          Omschrijving: lead.omschrijving || "",
          Gemeente: lead.gemeente,
          Status: "Nieuw",
          "Datum aanvraag": todayIsoDate(),
          Bron: "Website contactformulier",
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[leads] Airtable create mislukt:", res.status, err);
      return null;
    }

    const data = (await res.json()) as { id: string };
    return {
      id: data.id,
      url: recordUrl(baseId, tableId, data.id),
    };
  } catch (error) {
    console.error("[leads] Airtable create error:", error);
    return null;
  }
}

export async function patchLeadAnalysis(
  recordId: string,
  analysis: GroqAnalysis,
): Promise<void> {
  const { apiKey, baseId, tableId } = getConfig();
  if (!apiKey || !baseId || !tableId) return;

  const prioriteitMap = {
    hoog: "Hoog",
    medium: "Medium",
    laag: "Laag",
  } as const;

  const grootteMap = {
    klein: "Klein",
    middel: "Middel",
    groot: "Groot",
  } as const;

  try {
    const res = await fetch(
      `${AIRTABLE_API}/${baseId}/${tableId}/${recordId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "AI Prioriteit":
              prioriteitMap[analysis.prioriteit] ??
              capitalizeSelect(analysis.prioriteit),
            "AI Projectgrootte":
              grootteMap[analysis.geschatte_projectgrootte] ??
              capitalizeSelect(analysis.geschatte_projectgrootte),
            "AI Opmerking": `${analysis.reden_prioriteit}\n\n${analysis.slimme_opmerking}`.trim(),
            "Voorgestelde SMS": analysis.voorgestelde_sms,
            "Aanbevolen reactietijd": analysis.aanbevolen_reactietijd,
          },
        }),
      },
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("[leads] Airtable patch mislukt:", res.status, err);
    }
  } catch (error) {
    console.error("[leads] Airtable patch error:", error);
  }
}
