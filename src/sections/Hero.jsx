import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const heroLines = [
  "I build practical, data-driven solutions for real-world problems.",
  "I work across data science, full-stack systems, APIs, and fintech.",
  "I use machine learning only where it adds measurable value.",
  "I focus on reliability, clarity, and scalable systems.",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
                Developer • Designer • Builder
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I’m
                <span className="block text-indigo-400 mt-1">
                  CHARAN&nbsp;VENISHETTI
                </span>
              </h1>

              <div className="space-y-2 max-w-xl">
                {heroLines.map((line, i) => (
                  <p key={i} className="text-lg text-gray-300">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="glass p-4 flex justify-center">
              <img
                src="/images/charan.jpeg"
                alt="Charan Venishetti"
                className="rounded-xl object-cover w-full max-h-[400px]"
              />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}


