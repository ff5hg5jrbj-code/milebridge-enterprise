import { Navigation } from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import { FleetOverview } from '../components/FleetOverview'
import { MountainLogistics } from '../components/MountainLogistics'
import { IndustriesServed } from '../components/IndustriesServed'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppWidget from '../components/WhatsAppWidget'
import { StatsCounter } from '../components/StatsCounter'

export default function Home() {
  return (
    <main className="min-h-screen font-sans antialiased text-gray-900 bg-white">
      <Navigation />
      
      {/* 1. Impactful Branded Hero */}
      <Hero />
      
      {/* 2. Key Stats from Brochure */}
      <StatsCounter />
      
      {/* 3. Company Background */}
      <section id="about" className="scroll-mt-32">
        <About />
      </section>
      
      {/* 4. Branded Service Cards */}
      <section id="services" className="scroll-mt-32">
        <Services />
      </section>
      
      {/* 5. Branded Fleet Grid */}
      <section id="fleet" className="scroll-mt-32">
        <FleetOverview />
      </section>
      
      {/* 6. Branded Mountain Specialist Section */}
      <section id="mountain-routes" className="scroll-mt-32">
        <MountainLogistics />
      </section>
      
      {/* 7. Industry Focus */}
      <IndustriesServed />
      
      {/* 8. Functional Contact Form */}
      <section id="contact" className="scroll-mt-32">
        <Contact />
      </section>
      
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
