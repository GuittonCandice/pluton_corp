'use client'

import { themes } from '@/lib/themes'
import { useTheme } from '@/components/ThemeProvider'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="theme-switcher">
      <label htmlFor="theme-select" className="theme-switcher-label">
        Direction
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value as typeof theme)}
        className="theme-switcher-select"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  )
}
