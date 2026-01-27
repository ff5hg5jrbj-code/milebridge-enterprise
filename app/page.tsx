import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <Hero />
          <About />
          <Services />
          <ContactCTA />
        </div>
      </div>
      <Footer />
    </>
  )
}
