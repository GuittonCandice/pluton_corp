export default function Hero() {
  return (
    <section
      id="hero"
      className="gradient-bg h-[800px] flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-purple-500/30 rounded-full rotate-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 border border-cyan-500/20 rounded-lg rotate-slow"
          style={{ animationDirection: 'reverse' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 slide-in">
          <div className="mono text-emerald-400 text-sm"># Complete Duo</div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Frontend</span>
            <span className="text-purple-400 block">+ Backend</span>
            <span className="text-gradient block">= Full Stack</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
            We combine advanced design systems, smooth animations, and
            intelligent automation to create exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold glow transition-all">
              View our projects
            </button>
            <div className="mono text-sm text-slate-400">
              <span className="text-emerald-400">&gt;</span> available_for_hire:
              true
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mb-6 flex justify-center">
            <img
              src="/IMG_9753.gif"
              alt="Collaboration"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="code-bg p-6 rounded-lg border border-slate-700 mono text-sm floating">
            <div className="text-slate-500">// Our collaboration</div>
            <div className="text-purple-400">
              const <span className="text-white">team</span> = {'{'}
            </div>
            <div className="ml-4 text-cyan-400">
              frontend: <span className="text-emerald-400">'UI/UX + Animations'</span>,
            </div>
            <div className="ml-4 text-cyan-400">
              backend: <span className="text-emerald-400">'APIs + AI + Automation'</span>,
            </div>
            <div className="ml-4 text-cyan-400">
              experience: <span className="text-emerald-400">'5+ years each'</span>,
            </div>
            <div className="ml-4 text-cyan-400">
              availability: <span className="text-emerald-400">'immediate'</span>
            </div>
            <div className="text-purple-400">{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
