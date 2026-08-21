// src/shared/componentsCreatedByMe/JsonLd.tsx

/**
 * JsonLd — renders a <script type="application/ld+json"> tag for structured data.
 * Pass any valid Schema.org object as `schema`.
 * Rendered server-side only; zero client JS weight.
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
