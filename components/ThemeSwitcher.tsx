'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { themes } from '@/lib/themes'
import { useTheme } from '@/components/ThemeProvider'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()
  const current = themes.find((t) => t.id === theme) ?? themes[0]

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="theme-switcher" ref={rootRef}>
      <span className="theme-switcher-label" id={`${listboxId}-label`}>
        Direction
      </span>
      <div className="theme-switcher-dropdown">
        <button
          type="button"
          className="theme-switcher-trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${listboxId}-label`}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="theme-switcher-trigger-label">{current.label}</span>
          <span className="theme-switcher-chevron" aria-hidden="true">
            ▾
          </span>
        </button>

        {open && (
          <ul
            id={listboxId}
            className="theme-switcher-menu"
            role="listbox"
            aria-labelledby={`${listboxId}-label`}
          >
            {themes.map((item) => (
              <li key={item.id} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={item.id === theme}
                  className={
                    item.id === theme
                      ? 'theme-switcher-option is-active'
                      : 'theme-switcher-option'
                  }
                  onClick={() => {
                    setTheme(item.id)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
