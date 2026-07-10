export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-display text-lg text-primary">Pluton Corp</div>
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} — Agence de développement
        </p>
      </div>
    </footer>
  )
}
