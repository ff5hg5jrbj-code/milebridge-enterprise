import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <ContactCTA />
    </main>
  );
}
