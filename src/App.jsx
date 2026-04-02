import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import Process from "./components/Process";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Jobs />
      <Process />
      <CTABanner />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
