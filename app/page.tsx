import Navbar from "../components/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Work from "./sections/work";
import Footer from "../components/footer";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
