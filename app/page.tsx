import Navbar from "../components/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Work from "./sections/work";
import Footer from "../components/footer";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
