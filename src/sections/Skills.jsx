import { motion } from "framer-motion";

import Reveal from "../components/Reveal";


const skills = [
  {
    title: "Frontend Engineering",
    points: [
      "React component architecture",
      "State & side-effect management",
      "Design systems & reusable UI",
      "Accessibility & layout discipline",
    ],
  },
  {
    title: "Backend & APIs",
    points: [
      "REST API design",
      "Authentication & authorization",
      "Database integration",
      "Error handling & reliability",
    ],
  },
  {
    title: "Data Science & Analytics",
    points: [
      "Data cleaning & feature engineering",
      "Exploratory data analysis",
      "Statistical reasoning",
      "Insight-driven decision making",
    ],
  },
  {
    title: "Machine Learning",
    points: [
      "Model selection & evaluation",
      "Applied ML (only where useful)",
      "Overfitting & bias awareness",
      "Deployment-ready thinking",
    ],
  },
  {
    title: "Systems & Performance",
    points: [
      "Performance optimization",
      "Scalability considerations",
      "System consistency",
      "Failure-case thinking",
    ],
  },
  {
    title: "Tooling & Workflow",
    points: [
      "Git & version control",
      "Modern build tools (Vite)",
      "Project structure & maintainability",
      "Collaborative development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="overflow-x-hidden overflow-y-clip">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* HEADER — calm, neutral */}
        <Reveal>
          <div className="mb-20">
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
              Skills
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              How I <span className="text-indigo-400">work</span>
            </h2>
          </div>
        </Reveal>

        {/* SKILL GRID */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={{
                hidden: (i) => {
                  const directions = [
                    { x: -150, y: 0 },
                    { x: 150, y: 0 },
                    { x: 0, y: 150 },
                    { x: 0, y: -150 },
                  ];
                  return { opacity: 0, ...directions[i % 4] };
                },
                show: { opacity: 1, x: 0, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-8 cursor-pointer h-full"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                  {skill.title}
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {skill.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

