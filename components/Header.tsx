'use client'

import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-bar">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#hero" className="font-display text-xl text-primary tracking-tight shrink-0">
          Pluton Corp
        </a>
        <div className="hidden md:flex items-center gap-5">
          <a href="#services" className="nav-link">
            <span className="nav-bracket">[01] </span>Services
          </a>
          <a href="#tools" className="nav-link">
            <span className="nav-bracket">[02] </span>Outils
          </a>
          <a href="#clients" className="nav-link">
            <span className="nav-bracket">[03] </span>Références
          </a>
          <a href="#team" className="nav-link">
            <span className="nav-bracket">[04] </span>Équipe
          </a>
          <a href="#contact" className="btn-primary text-xs px-4 py-2">
            Contact
          </a>
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  )
}
