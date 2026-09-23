import { SERVICE_CATEGORIES } from "../../_data/services";

export const WORK_TYPES = [
  ...SERVICE_CATEGORIES.map((service) => service.title),
  "Andere",
] as const;

export type WorkType = (typeof WORK_TYPES)[number];

export type LeadPayload = {
  naam: string;
  telefoon: string;
  email: string;
  typeWerk: WorkType;
  gemeente: string;
  omschrijving: string;
};

export type GroqAnalysis = {
  prioriteit: "hoog" | "medium" | "laag";
  reden_prioriteit: string;
  geschatte_projectgrootte: "klein" | "middel" | "groot";
  aanbevolen_reactietijd: string;
  slimme_opmerking: string;
  voorgestelde_sms: string;
};

export type AirtableRecord = {
  id: string;
  url: string;
};
