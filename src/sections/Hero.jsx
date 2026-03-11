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
    <section id="hero" className="!pb-0 md:!pb-0">
      <div className="min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* LEFT CONTENT */}
              <div className="max-w-xl">

                <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-400 mb-3">
                  Developer • Designer • Builder
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap">
                  Hi, I’m
                  <motion.span
                    className="block text-indigo-400 mt-1 flex"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                      },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                  >
                    {Array.from("CHARAN\u00A0VENISHETTI").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 },
                        }}
                        className={char === "\u00A0" ? "w-3 md:w-4" : ""}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </h1>

                <div className="space-y-3">
                  {heroLines.map((line, i) => (
                    <p key={i} className="text-base sm:text-lg text-gray-300">
                      {line}
                    </p>
                  ))}
                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center md:justify-end w-full">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  // We add ml-auto and mr-0 on md+ to override `.hero-image` margin: auto
                  className="glass hero-image md:!m-0 md:!ml-auto"
                >
                  <img
                    src="/images/charan.jpeg"
                    alt="Charan Venishetti"
                    className="rounded-xl object-cover w-full"
                  />
                </motion.div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}