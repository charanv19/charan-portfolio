import { motion } from "framer-motion";



export default function RevealDirectional({
  children,
  direction = "up",
}) {
  const offsetX =
    direction === "left"
      ? -200
      : direction === "right"
      ? 200
      : 0;

  const offsetY =
    direction === "up"
      ? 150
      : direction === "down"
      ? -150
      : 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.1,
      }}
      className="relative"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: offsetX, y: offsetY, filter: "blur(6px)" },
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1], // Apple-style
            },
          },
        }}
        style={{ willChange: "transform, opacity, filter" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}