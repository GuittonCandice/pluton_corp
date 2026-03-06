export default function Profiles() {
  return (
    <section id="profiles" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mono text-emerald-400 text-sm mb-4"># Our profiles</div>
          <h2 className="text-4xl font-bold mb-6">
            Two complementary expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="flex items-center mb-6">
              <img
                src="/images/Candice.JPG"
                alt="Frontend Dev"
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Candice</h3>
                <div className="mono text-purple-400 text-sm">
                  Frontend Developer
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Specialized in modern user interfaces, design systems, and
              micro-interactions that make a difference.
            </p>
            <div className="space-y-4">
              <div>
                <div className="text-purple-400 text-sm font-semibold mb-2">
                  Expertise
                </div>
                <div className="text-slate-300">
                  React, TypeScript, Flutter, Design Systems, Animations, UX/UI
                </div>
              </div>
              <div>
                <div className="text-purple-400 text-sm font-semibold mb-2">
                  Notable projects
                </div>
                <div className="text-slate-300">
                  Design system for fintech startup, Flutter mobile app
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="flex items-center mb-6">
              <img
                src="/images/Sami.png"
                alt="Backend Dev"
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Sami</h3>
                <div className="mono text-cyan-400 text-sm">
                  Backend Developer & AI Engineer
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Expert in backend architectures, robust APIs, and AI integration
              to automate and optimize business processes.
            </p>
            <div className="space-y-4">
              <div>
                <div className="text-cyan-400 text-sm font-semibold mb-2">
                  Expertise
                </div>
                <div className="text-slate-300">
                  Node.js, Python, PostgreSQL, AI, Automation, DevOps
                </div>
              </div>
              <div>
                <div className="text-cyan-400 text-sm font-semibold mb-2">
                  Notable projects
                </div>
                <div className="text-slate-300">
                  AI Agent, LLM, RAG, Data Engineering, Automation, DevOps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
