import { motion } from "framer-motion";

import Reveal from "../components/Reveal";


const projects = [
  {
    title: "Personal Portfolio",
    problem:
      "Needed a professional identity that reflects how I think and build.",
    solution:
      "Designed a motion-driven, performance-focused portfolio with clear structure and intent.",
    stack: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Dashboard Interface",
    problem:
      "Complex data was difficult to scan and understand quickly.",
    solution:
      "Built a clean dashboard UI with strong hierarchy, spacing discipline, and reusable components.",
    stack: ["React", "UI Architecture"],
    github: "https://github.com/yourusername/dashboard-ui",
  },
  {
    title: "API-Driven Application",
    problem:
      "Inconsistent API responses caused poor UX.",
    solution:
      "Implemented robust loading, error handling, and predictable state transitions.",
    stack: ["JavaScript", "APIs", "UX"],
    github: "https://github.com/charanv19/blinq-grow-hub.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* HEADER */}
        <Reveal>
          <div className="mb-16 md:mb-24 max-w-3xl">
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Things I’ve <span className="text-indigo-400">built</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Selected work that shows how I approach problems, structure
              solutions, and care about the final experience.
            </p>
          </div>
        </Reveal>

        {/* PROJECT LIST */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25, // Staggers them perfectly one by one
              },
            },
          }}
          className="space-y-16"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={{
                hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -150 : 150, y: 0 }),
                show: { opacity: 1, x: 0, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start cursor-pointer"
              >

                {/* TITLE + GITHUB */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition"
                    >
                      View on GitHub →
                    </a>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* PROBLEM */}
                <div>
                  <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">
                    Problem
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* SOLUTION */}
                <div>
                  <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">
                    Solution
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}




