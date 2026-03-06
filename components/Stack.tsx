export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mono text-purple-400 text-sm mb-4">
              # Our tech stack
            </div>
            <h2 className="text-4xl font-bold mb-6">Technologies & Tools</h2>
            <p className="text-xl text-slate-400 mb-8">
              Modern and performant stack, chosen for its flexibility and
              ability to create exceptional experiences.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-purple-400 font-semibold mb-2">
                  Frontend & Design
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    React
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    Next.js
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    TypeScript
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    Tailwind
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    Framer Motion
                  </span>
                </div>
              </div>

              <div>
                <div className="text-cyan-400 font-semibold mb-2">
                  Backend & AI
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    Node.js
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    Python
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    PostgreSQL
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    UX Pilot AI
                  </span>
                  <span className="bg-slate-700 px-3 py-1 rounded mono text-xs">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="code-bg p-6 rounded-lg border border-slate-600 mono text-sm">
              <div className="text-slate-500">// AI integration example</div>
              <div className="text-purple-400">
                import <span className="text-white">{'{ UX Pilot AI }'}</span>{' '}
                from <span className="text-emerald-400">'UX Pilot AI'</span>
              </div>
              <div className="text-purple-400">
                import <span className="text-white">{'{ useAnimation }'}</span>{' '}
                from <span className="text-emerald-400">'framer-motion'</span>
              </div>
              <div className="mt-2 text-cyan-400">
                const <span className="text-white">smartComponent</span> = ()
                =&gt; {'{'}
              </div>
              <div className="ml-4 text-white">
                // Interface + AI = Magic ✨
              </div>
              <div className="text-cyan-400">{'}'}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-slate-400">Years of experience</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-slate-400">Projects delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
