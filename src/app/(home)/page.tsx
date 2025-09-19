import About from "@/components/(home)/About";
import Clients from "@/components/(home)/Clients";
import Contact from "@/components/(home)/Contact";
import FAQ from "@/components/(home)/FAQ";
import Footer from "@/components/(home)/Footer";
import Hero from "@/components/(home)/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
