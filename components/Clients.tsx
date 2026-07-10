import { clients } from '@/lib/content'
import SectionHeader from '@/components/SectionHeader'

export default function Clients() {
  return (
    <section id="clients" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          number="03"
          label="Références"
          title="Des références dans des secteurs exigeants"
          description="Santé, finance, énergie, retail — nous avons accompagné des entreprises en France et à l'international sur des projets où la fiabilité et la qualité ne sont pas négociables."
        />

        <div className="client-strip">
          {clients.map((client) => (
            <div key={client.name} className="client-strip-item client-logo">
              <div className="h-12 w-full max-w-[120px] flex items-center justify-center mb-3">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="font-medium text-sm text-primary">{client.name}</div>
              <div className="text-xs text-faint mt-0.5">{client.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
