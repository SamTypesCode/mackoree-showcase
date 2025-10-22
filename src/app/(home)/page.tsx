import Footer from "@/components/Footer";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import Promo from "@/components/Promo";
import About from "@/components/home/About";

interface PromoBarMessageType {
  message: string;
  className?: string;
}

const promobar_message = process.env.PROMOBAR_MESSAGE ?? "";

const PromoBarMessage: PromoBarMessageType | null =
  promobar_message.trim() === "" ? null : { message: promobar_message };

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
        <Hero /> {/* TODO */}
        <About />
        <Partners />
        <Projects />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer /> {/* TODO */}
    </>
  );
}
