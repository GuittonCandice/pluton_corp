import { asset } from './basePath'

export type Client = {
  name: string
  location: string
  logo: string
  /** invert = logo noir sur fond sombre ; disc = pastille blanche ronde (éditorial) */
  logoMark?: 'invert' | 'disc'
}

export const clients: Client[] = [
  { name: 'Heywear', location: 'New York', logo: asset('/clients/heywear.png'), logoMark: 'invert' },
  { name: 'Banque de France', location: 'France', logo: asset('/clients/banque-france.png'), logoMark: 'disc' },
  { name: 'Soundcheck Capital', location: 'Los Angeles', logo: asset('/clients/soundcheck.png') },
  { name: 'Furo', location: 'Los Angeles', logo: asset('/clients/furo.png'), logoMark: 'disc' },
  { name: 'Beem Energy', location: 'France', logo: asset('/clients/beem.png') },
]

export const services = [
  {
    title: 'Cadrage & stratégie',
    description:
      'Nous clarifions vos besoins, priorisons les fonctionnalités et définissons une feuille de route alignée sur vos objectifs de croissance.',
    icon: 'fa-compass',
  },
  {
    title: 'Développement sur mesure',
    description:
      'Applications web, backends robustes, interfaces soignées — nous construisons les fondations techniques de votre activité.',
    icon: 'fa-code',
  },
  {
    title: 'Gestion de projet',
    description:
      'Suivi régulier, points d\'avancement clairs, livraisons itératives. Vous savez toujours où en est votre projet.',
    icon: 'fa-clipboard-check',
  },
  {
    title: 'Maintenance & évolution',
    description:
      'Votre produit ne s\'arrête pas au lancement. Nous assurons sa stabilité et son évolution dans la durée.',
    icon: 'fa-shield-halved',
  },
  {
    title: 'IA & automatisations',
    description:
      'Intelligence artificielle cadrée, workflows Make et n8n — nous automatisons ce qui a du sens, sans complexité inutile.',
    icon: 'fa-bolt',
  },
]

export const toolCategories = [
  {
    title: 'Code & frameworks',
    tools: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'Flutter',
      'PostgreSQL',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Architecture & infra',
    tools: [
      'Microservices',
      'API REST & GraphQL',
      'Docker',
      'Kubernetes',
      'AWS',
      'CI/CD',
      'Supabase',
      'Railway',
    ],
  },
  {
    title: 'Gestion de projet',
    tools: ['Linear', 'Notion', 'Jira', 'GitHub', 'GitLab', 'Confluence'],
  },
  {
    title: 'Design',
    tools: ['Figma', 'Storybook', 'Design systems', 'Prototypage'],
  },
  {
    title: 'IA & automatisations',
    tools: ['OpenAI', 'Make', 'n8n', 'Agents IA'],
  },
]

export type TeamMember = {
  name: string
  role: string
  experience: string
  skills: string
  photo?: string
  photoStyle?: { scale: number; originY: string }
  partnerLabel?: string
  linkedin?: string
}

export const team: TeamMember[] = [
  {
    name: 'Yanis Bekrar',
    role: 'Ingénieur infrastructure',
    experience: '17 ans d\'expérience',
    skills: 'Infra, backend, déploiement, DevOps — grandes banques françaises',
    photo: asset('/images/Yanis.png'),
    photoStyle: { scale: 1.55, originY: '34%' },
    linkedin: 'https://www.linkedin.com/in/yanis-bekrar-115b0b87/',
  },
  {
    name: 'Jonathan Audhasse',
    role: 'Ingénieur backend',
    experience: '10 ans d\'expérience',
    skills: 'Backend, DevOps, architecture',
    photo: asset('/images/Jonathan.png'),
    photoStyle: { scale: 1.5, originY: '44%' },
    linkedin: 'https://www.linkedin.com/in/jonathan-audhasse-425403a9/',
  },
  {
    name: 'Sami Bekrar',
    role: 'Développeur',
    experience: '10 ans d\'expérience',
    skills: 'Architecture, front, backend, DevOps, produit, automatisation, IA',
    photo: asset('/images/Sami.png'),
    partnerLabel: 'Associé',
    linkedin: 'https://www.linkedin.com/in/sami-bekrar-b7b27575/',
  },
  {
    name: 'Candice Guitton',
    role: 'Développeuse',
    experience: '8 ans d\'expérience',
    skills: 'Front, architecture, produit, design UI/UX',
    photo: asset('/images/Candice.JPG'),
    partnerLabel: 'Associée',
    linkedin: 'https://www.linkedin.com/in/candice-guitton-172616b9/',
  },
]

export const contact = {
  calendarUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ??
    'https://calendar.app.google/NLT4rpkpUy4d2smq7',
}
