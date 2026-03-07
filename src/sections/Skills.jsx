import Reveal from "../components/Reveal";
import RevealDirectional from "../components/RevealDirectional";

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
    <section id="skills"  className="min-h-screen flex items-center">
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
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skill, i) => (
            <RevealDirectional
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="glass p-8 hover:translate-y-[-6px] transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  {skill.title}
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {skill.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
            </RevealDirectional>
          ))}
        </div>

      </div>
    </section>
  );
}

