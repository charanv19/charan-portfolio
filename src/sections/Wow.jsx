 import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "I don’t chase trends.",
  "I design for clarity.",
  "I build with intent.",
  "Details earn trust.",
];

export default function Wow() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="wow"
      ref={ref}
      className="relative h-[220vh]"
    >
      {/* PINNED VIEWPORT */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full text-center">
          <div className="space-y-40">
            {lines.map((text, i) => {
              const start = i * 0.2;
              const mid = start + 0.1;
              const end = start + 0.2;

              const scale = useTransform(
                scrollYProgress,
                [start, mid, end],
                [0.85, 1, 1.15]
              );

              const y = useTransform(
                scrollYProgress,
                [start, mid, end],
                [40, 0, -40]
              );

              const opacity = useTransform(
                scrollYProgress,
                [start, mid, end],
                [0, 1, 0]
              );

              return (
                <motion.h2
                  key={i}
                  style={{
                    scale,
                    y,
                    opacity,
                  }}
                  className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-100 will-change-transform"
                >
                  {text}
                </motion.h2>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}