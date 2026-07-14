import { buildLocalBusinessSchema } from "../lib/local-business-schema";

interface LocalBusinessSchemaProps {
  areaServed?: string | string[];
  description?: string;
}

export default function LocalBusinessSchema({
  areaServed,
  description,
}: LocalBusinessSchemaProps) {
  const schema = buildLocalBusinessSchema({ areaServed, description });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
