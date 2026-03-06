export default function Builds() {
  return (
    <section id="builds" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mono text-cyan-400 text-sm mb-4"># What we build</div>
          <h2 className="text-4xl font-bold mb-6">
            Apps, Automations & AI Agents
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From user interfaces to complex backend systems, we master the
            entire modern development chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all group">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-palette text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Design Systems</h3>
            <p className="text-slate-400 mb-6">
              Reusable components, design tokens, and guidelines for consistent
              and scalable interfaces.
            </p>
            <div className="mono text-xs text-purple-400">
              React • Figma • Storybook
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all group">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-robot text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">AI Agents</h3>
            <p className="text-slate-400 mb-6">
              Intelligent automation, advanced chatbots, and AI workflows to
              optimize your processes.
            </p>
            <div className="mono text-xs text-cyan-400">
              UX Pilot AI • LangChain • Python
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all group">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-layers text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Full Stack Apps</h3>
            <p className="text-slate-400 mb-6">
              Complete applications with modern interfaces, robust APIs, and
              optimized databases.
            </p>
            <div className="mono text-xs text-emerald-400">
              Next.js • Node.js • PostgreSQL
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
