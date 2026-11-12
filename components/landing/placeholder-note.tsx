/**
 * Visible stand-in for copy or media the client still has to supply.
 * Full dashed border. No side accent.
 */
export function PlaceholderNote({
  title = "Placeholder",
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-dashed border-white/25 bg-white/[0.03] p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#00ffd5] mb-2">{title}</p>
      <div className="text-sm sm:text-base text-white/75 leading-relaxed">{children}</div>
    </div>
  )
}
