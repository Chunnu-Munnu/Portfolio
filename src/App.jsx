import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Achievements from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Experiences />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
