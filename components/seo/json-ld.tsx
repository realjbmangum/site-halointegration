/**
 * Renders a JSON-LD block.
 *
 * A plain <script> tag is used rather than next/script because this site is a
 * static export: the markup has to be present in the prerendered HTML so that
 * crawlers which do not execute JavaScript still see it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Payloads come from typed constants, never from user input. The `<`
      // escape is defense in depth: JSON.stringify does not escape `<`, so a
      // future caller passing a string containing `</script>` or `<!--`
      // would otherwise end this block early. `<` is valid JSON and
      // parsers read it as `<`.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
