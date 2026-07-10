export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 fade-in">
            <p className="section-label mb-6">Agence de développement</p>
            <h1 className="font-display hero-title text-primary mb-6">
              Nous construisons les outils qui font grandir votre entreprise
            </h1>
            <p className="hero-lead text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Pluton Corp accompagne les entreprises dans la définition de leurs
              besoins numériques et la mise en place de solutions fiables,
              évolutives et alignées sur leurs objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary">
                Discuter de votre projet
              </a>
              <a href="#services" className="btn-secondary">
                Nos services
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hero-stats">
            <p className="section-label mb-6">En chiffres</p>
            <div className="space-y-5">
              {[
                { value: '35+', label: "Années d'expérience cumulées" },
                { value: '5', label: "Secteurs d'intervention" },
                { value: '100%', label: 'Suivi client dédié' },
                { value: '24h', label: 'Délai de réponse' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-baseline justify-between gap-4 ${
                    i > 0 ? 'pt-5 border-t border-[var(--color-border)]' : ''
                  }`}
                >
                  <span className="font-display text-2xl font-medium text-accent">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted text-right">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
