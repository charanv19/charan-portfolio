import { motion } from "framer-motion";

export default function RevealDirectional({
  children,
  direction = "up",
}) {
  const offsetX =
    direction === "left"
      ? -260
      : direction === "right"
      ? 260
      : 0;

  const offsetY =
    direction === "up"
      ? 120
      : direction === "down"
      ? -120
      : 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offsetX,
        y: offsetY,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1], // Apple-style
        },
      }}
      viewport={{
        once: false,   // 👈 enables vanish on scroll up
        amount: 0.28,
      }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}