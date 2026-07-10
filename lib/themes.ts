export type ThemeId = 'editorial' | 'minimal' | 'premium'

export const themes: { id: ThemeId; label: string; description: string }[] = [
  {
    id: 'editorial',
    label: 'Noir éditorial',
    description: 'Fond sombre, typo géométrique, accent lime',
  },
  {
    id: 'minimal',
    label: 'Blanc typographique',
    description: 'Blanc pur, titres massifs, bande colorée',
  },
  {
    id: 'premium',
    label: 'Chaud premium',
    description: 'Ivoire, bordeaux, serif classique',
  },
]

export const DEFAULT_THEME: ThemeId = 'editorial'
