import { services } from '@/lib/content'
import SectionHeader from '@/components/SectionHeader'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          number="01"
          label="Services"
          title="Un accompagnement complet, de l'idée à la maintenance"
          description="Nous ne livrons pas seulement du code. Nous structurons votre projet, le développons avec rigueur et restons à vos côtés pour faire évoluer votre produit."
        />

        <div className="service-grid">
          {services.map((service, i) => (
            <div key={service.title} className="service-item group">
              <span className="service-num">
                01.{String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="service-title font-display text-xl text-primary mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
