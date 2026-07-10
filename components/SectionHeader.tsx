type SectionHeaderProps = {
  number: string
  label: string
  title: string
  description?: string
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="section-label mb-3">
        {number} — {label}
      </p>
      <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted leading-relaxed">{description}</p>
      )}
    </div>
  )
}
