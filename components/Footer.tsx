export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="mono text-lg font-bold text-gradient">
            &lt;dev.duo /&gt;
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Dribbble"
            >
              <i className="fa-brands fa-dribbble text-xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 mono text-sm">
          © 2024 DevDuo - Frontend + Backend = Full Stack Excellence
        </div>
      </div>
    </footer>
  )
}
