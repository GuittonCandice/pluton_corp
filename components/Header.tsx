'use client'

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="mono text-xl font-bold text-gradient">
          &lt;dev.duo /&gt;
        </div>
        <div className="hidden md:flex items-center space-x-8 mono text-sm">
          <a href="#builds" className="hover:text-purple-400 transition-colors">
            [builds]
          </a>
          <a href="#stack" className="hover:text-cyan-400 transition-colors">
            [stack]
          </a>
          <a
            href="#profiles"
            className="hover:text-emerald-400 transition-colors"
          >
            [profiles]
          </a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">
            [contact]
          </a>
        </div>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      </nav>
    </header>
  )
}
