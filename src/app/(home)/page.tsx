import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Projects from "@/components/home/Projects";
import Promo from "@/components/Promo";

interface PromoBarMessageType {
  message: string;
  className?: string;
}

// const PromoBarMessage: PromoBarMessageType | null = null;
const PromoBarMessage: PromoBarMessageType | null = {
  message: "Sign up for exclusive access and save 50% on your first order ",
};

export default function Home() {
  return (
    <>
      {PromoBarMessage && (
        <Promo
          message={PromoBarMessage.message}
          className={PromoBarMessage.className}
        />
      )}
      <main>
        <Hero />
        <About />
        <Partners />
        <Projects />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
