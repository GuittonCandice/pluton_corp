import { toolCategories } from '@/lib/content'
import SectionHeader from '@/components/SectionHeader'

export default function Tools() {
  return (
    <section id="tools" className="section tools-section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          number="02"
          label="Outils"
          title="Les outils que nous maîtrisons"
          description="Des frameworks modernes aux architectures distribuées, en passant par la gestion de projet et le design — nous nous adaptons à votre environnement existant."
        />

        <div className="service-grid tools-grid">
          {toolCategories.map((category) => (
            <div key={category.title} className="service-item">
              <span className="service-num" aria-hidden="true"></span>
              <div>
                <h3 className="font-display text-sm text-accent mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span key={tool} className="tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
