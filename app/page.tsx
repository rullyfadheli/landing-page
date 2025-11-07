import Header from "./src/ui/Header";
import Hero from "./src/ui/Hero";
import About from "./src/ui/About";
import Packages from "./src/ui/Packages";
import Testimonials from "./src/ui/Testimonials";
import Contact from "./src/ui/Contact";
import Footer from "./src/ui/Footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Index = () => {
  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
