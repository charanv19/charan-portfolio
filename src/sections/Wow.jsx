import { motion } from "framer-motion";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "I don’t chase trends.",
  "I design for clarity.",
  "I build with intent.",
  "Details earn trust.",
];

function WowLine({ text, index, totalLines, scrollYProgress }) {
  const segment = 0.95 / totalLines;
  const start = index * segment;
  const mid = start + (segment / 2);
  const end = start + segment;

  const scale = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0.5, 1, 3] 
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, mid - 0.05, mid + 0.05, end],
    [0, 1, 1, 0]
  );

  return (
    <motion.h2
      style={{
        scale,
        y: 0,
        opacity,
      }}
      className="absolute text-4xl md:text-6xl font-semibold tracking-tight text-gray-100 will-change-transform drop-shadow-2xl text-center w-full"
    >
      {text}
    </motion.h2>
  );
}

export default function Wow() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="wow"
      ref={ref}
      className="relative h-[250vh] z-10"
    >
      {/* PINNED VIEWPORT */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden" style={{ position: '-webkit-sticky' }}>
        <div className="max-w-6xl mx-auto px-6 w-full text-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {lines.map((text, i) => (
              <WowLine 
                key={i} 
                text={text} 
                index={i} 
                totalLines={lines.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}