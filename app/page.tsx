import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
