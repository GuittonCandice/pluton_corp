import { team, type TeamMember } from '@/lib/content'
import SectionHeader from '@/components/SectionHeader'

const TEAM_CARD_CLASS =
  'w-80 h-64 flex flex-col flex-shrink-0 card team-card'

function Initials({ name }: { name: string }) {
  const parts = name.split(' ')
  const initials = parts
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
  return (
    <div className="team-initials w-16 h-16 flex items-center justify-center text-accent font-display font-medium text-lg flex-shrink-0 border border-[var(--color-border)] rounded-[var(--radius)]">
      {initials}
    </div>
  )
}

function TeamAvatar({ member }: { member: TeamMember }) {
  if (!member.photo) return <Initials name={member.name} />

  const crop = member.photoStyle

  return (
    <div className="team-avatar w-16 h-16 overflow-hidden flex-shrink-0 border border-[var(--color-border)] rounded-[var(--radius)]">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover"
        style={
          crop
            ? {
                transform: `scale(${crop.scale})`,
                transformOrigin: `50% ${crop.originY}`,
              }
            : undefined
        }
      />
    </div>
  )
}

function TeamCard({ member }: { member: TeamMember }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-4 min-w-0">
          <TeamAvatar member={member} />
          <div className="min-w-0">
            <h3 className="font-display text-lg text-primary">{member.name}</h3>
            <p className="text-xs text-accent mt-0.5">{member.role}</p>
          </div>
        </div>
        {member.partnerLabel && (
          <span className="partner-badge flex-shrink-0 text-xs px-2 py-1">
            {member.partnerLabel}
          </span>
        )}
      </div>
      <p className="text-xs text-faint mb-2">{member.experience}</p>
      <p className="text-sm text-muted leading-relaxed flex-1">
        {member.skills}
      </p>
    </>
  )

  if (!member.linkedin) {
    return <div className={TEAM_CARD_CLASS}>{content}</div>
  }

  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Profil LinkedIn de ${member.name}`}
      className={`${TEAM_CARD_CLASS} hover:border-[var(--color-accent)] transition-colors cursor-pointer`}
    >
      {content}
    </a>
  )
}

function OthersCard() {
  return (
    <div className={`${TEAM_CARD_CLASS} border-dashed`}>
      <span className="font-display text-3xl text-faint mb-3">+</span>
      <h3 className="font-display text-lg text-primary mb-2">Et d&apos;autres</h3>
      <p className="text-sm text-muted leading-relaxed">
        Designers, data engineers, spécialistes sécurité — nous mobilisons les
        profils adaptés à chaque projet.
      </p>
    </div>
  )
}

const teamCards = [
  ...team.map((member) => ({ key: member.name, node: <TeamCard member={member} /> })),
  { key: 'others', node: <OthersCard /> },
]

export default function Team() {
  const marqueeItems = [...teamCards, ...teamCards]

  return (
    <section id="team" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          number="04"
          label="Équipe"
          title="Des développeurs expérimentés, mobilisés selon vos besoins"
          description="Sami Bekrar et Candice Guitton pilotent chaque projet. Ils s'appuient sur un réseau de développeurs de confiance, sélectionnés pour leur expertise et leur fiabilité."
        />
      </div>

      <div className="team-marquee mt-2">
        <div className="team-marquee-track px-6">
          {marqueeItems.map((item, index) => (
            <div key={`${item.key}-${index}`} aria-hidden={index >= teamCards.length}>
              {item.node}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
