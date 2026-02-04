import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Wow from "./sections/Wow";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      {/* GLOBAL RHYTHM CONTROLLER */}
      <main className="pt-16 ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Wow />
        <Contact />
      </main>
    </>
  );
}