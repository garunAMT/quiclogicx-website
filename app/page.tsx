import { About } from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import { Footer } from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import { Navbar } from "@/components/shared/Navbar";
import { Services } from "@/components/shared/Services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
