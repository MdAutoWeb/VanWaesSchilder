#!/usr/bin/env node
/**
 * Eenmalig uitvoeren om de Airtable base + view aan te maken.
 *
 * Vereist een Personal Access Token met scopes:
 *   schema.bases:read, schema.bases:write, data.records:read, data.records:write
 *
 * Gebruik:
 *   AIRTABLE_API_KEY=patxxx node scripts/setup-airtable.mjs
 */

const API = "https://api.airtable.com/v0/meta";
const apiKey = process.env.AIRTABLE_API_KEY;

if (!apiKey) {
  console.error("Zet AIRTABLE_API_KEY in je omgeving.");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

const tableDefinition = {
  name: "Aanvragen",
  description: "Contactaanvragen via de website",
  fields: [
    { name: "Naam", type: "singleLineText" },
    { name: "Telefoon", type: "singleLineText" },
    { name: "Email", type: "email" },
    {
      name: "Type werk",
      type: "singleSelect",
      options: {
        choices: [
          { name: "Binnenschilderwerk" },
          { name: "Buitenschilderwerk" },
          { name: "Decoratieve technieken" },
          { name: "Spuit- & lakwerk" },
          { name: "Andere" },
        ],
      },
    },
    { name: "Omschrijving", type: "multilineText" },
    { name: "Gemeente", type: "singleLineText" },
    {
      name: "Status",
      type: "singleSelect",
      options: {
        choices: [
          { name: "Nieuw" },
          { name: "Gecontacteerd" },
          { name: "Offerte verstuurd" },
          { name: "Gewonnen" },
          { name: "Verloren" },
        ],
      },
    },
    { name: "Datum aanvraag", type: "date", options: { dateFormat: { name: "iso" } } },
    { name: "Bron", type: "singleLineText" },
    {
      name: "AI Prioriteit",
      type: "singleSelect",
      options: {
        choices: [{ name: "Hoog" }, { name: "Medium" }, { name: "Laag" }],
      },
    },
    {
      name: "AI Projectgrootte",
      type: "singleSelect",
      options: {
        choices: [{ name: "Klein" }, { name: "Middel" }, { name: "Groot" }],
      },
    },
    { name: "AI Opmerking", type: "multilineText" },
    { name: "Voorgestelde SMS", type: "multilineText" },
    { name: "Aanbevolen reactietijd", type: "singleLineText" },
  ],
};

async function createBase() {
  const res = await fetch(`${API}/bases`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: "Van Waes - Leads",
      tables: [tableDefinition],
    }),
  });

  if (!res.ok) {
    throw new Error(`Base aanmaken mislukt: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

async function createView(baseId, tableId, statusFieldId, priorityFieldId) {
  const res = await fetch(`${API}/bases/${baseId}/tables/${tableId}/views`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: "Te behandelen",
      type: "grid",
      filter: {
        conjunction: "and",
        filterSet: [
          {
            fieldId: statusFieldId,
            operator: "is",
            value: "Nieuw",
          },
        ],
      },
      sort: priorityFieldId
        ? [{ fieldId: priorityFieldId, direction: "asc" }]
        : [],
    }),
  });

  if (!res.ok) {
    console.warn(
      `View aanmaken mislukt (handmatig aanmaken in Airtable): ${res.status}`,
      await res.text(),
    );
    return null;
  }

  return res.json();
}

function findFieldId(table, name) {
  return table.fields?.find((f) => f.name === name)?.id ?? null;
}

async function main() {
  console.log("Airtable base aanmaken…");
  const base = await createBase();
  const table = base.tables?.[0];

  if (!table) {
    throw new Error("Geen tabel teruggekregen van Airtable.");
  }

  const statusFieldId = findFieldId(table, "Status");
  const priorityFieldId = findFieldId(table, "AI Prioriteit");

  console.log("View 'Te behandelen' aanmaken…");
  await createView(base.id, table.id, statusFieldId, priorityFieldId);

  console.log("\n✓ Klaar! Zet dit in je .env en Vercel:\n");
  console.log(`AIRTABLE_BASE_ID=${base.id}`);
  console.log(`AIRTABLE_TABLE_ID=${table.id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
