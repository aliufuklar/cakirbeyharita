import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import References from "@/components/site/References";
import Contact from "@/components/site/Contact";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <Services />
      <About />
      <References />
      <Contact />
    </main>
  );
}
