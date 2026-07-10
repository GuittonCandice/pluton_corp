import { contact } from '@/lib/content'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">05 — Contact</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Un projet en tête ?
            </h2>
            <p className="text-muted leading-relaxed">
              Réservez un créneau pour un premier échange. Sans engagement.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <a
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-3 px-8 py-4 text-sm"
            >
              <i className="fa-solid fa-calendar"></i>
              Réserver un créneau
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
