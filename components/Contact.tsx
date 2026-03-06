export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mono text-pink-400 text-sm mb-4"># Ready to collaborate</div>
        <h2 className="text-4xl font-bold mb-6">
          Let's build something exceptional together
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether it's for an MVP, a complete redesign, or AI integration in
          your processes, we're here to turn your ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold glow transition-all">
            <i className="fa-solid fa-envelope mr-2"></i>
            Start a project
          </button>
          <button className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-all">
            <i className="fa-brands fa-github mr-2"></i>
            View our GitHub
          </button>
        </div>

        <div className="code-bg p-6 rounded-lg border border-slate-600 mono text-sm max-w-md mx-auto">
          <div className="text-slate-500">// Contact</div>
          <div className="text-cyan-400">
            email: <span className="text-emerald-400">'hello@devduo.fr'</span>
          </div>
          <div className="text-cyan-400">
            response_time: <span className="text-emerald-400">'&lt; 24h'</span>
          </div>
          <div className="text-cyan-400">
            meeting: <span className="text-emerald-400">'free'</span>
          </div>
        </div>
      </div>
    </section>
  )
}
