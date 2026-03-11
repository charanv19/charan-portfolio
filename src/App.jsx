import { motion } from "framer-motion";

import { useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Wow from "./sections/Wow";
import Contact from "./sections/Contact";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <Navbar />

      {/* GLOBAL SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 z-[60] origin-left"
      />

      {/* CUSTOM CURSOR (Hidden on Mobile) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.1,
        }}
      >
        <div className="absolute inset-0 bg-indigo-400 rounded-full opacity-40 blur-[4px]"></div>
      </motion.div>

      {/* GLOBAL RHYTHM CONTROLLER */}
      {/* Removed 'overflow-x-hidden' from main because it forcibly disables 'position: sticky' on iOS/mobile browsers. */}
      <main className="w-full">
        
        {/* standard components spacing layer */}
        <div className="flex flex-col gap-24 md:gap-32 w-full pb-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </div>

        {/* Parallax sections need exact zero-gap handoffs so they combine perfectly */}
        <Experience />
        <Wow />
        <Contact />
      </main>
    </>
  );
}