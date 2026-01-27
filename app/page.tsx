import { Navigation } from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppWidget from '../components/WhatsAppWidget'
import StatsCounter from '../components/StatsCounter'
import FleetOverview from '../components/FleetOverview'
import IndustriesServed from '../components/IndustriesServed'

export default function Home() {
  return (
    <main className="min-h-screen font-sans antialiased text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* KPI Stats Section - From Brochure Page 4 */}
      <StatsCounter />

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      {/* Fleet Overview - From Brochure Page 3 */}
      <FleetOverview />

      {/* Industries Grid - From Brochure Page 5 */}
      <IndustriesServed />

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
