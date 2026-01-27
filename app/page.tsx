import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Solutions />
      <Services />
      <Team />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
