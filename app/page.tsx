import Navbar from "../components/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Work from "./sections/work";
import Footer from "../components/footer";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-white px-4 py-2 font-semibold text-primary shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
