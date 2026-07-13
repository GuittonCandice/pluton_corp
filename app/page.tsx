import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Tools from '@/components/Tools'
import Clients from '@/components/Clients'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden">
        <main>
          <Hero />
          <Services />
          <Tools />
          <Clients />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
