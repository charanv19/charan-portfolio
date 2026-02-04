import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2025",
    title: "Guinness World Record — Agentathon 2025",
    org: "GDG Hyderabad × GDG Cloud Hyderabad",
    desc:
      "Support Lead & coordinator for a 36-hour Agentic AI hackathon with 2,000+ participants. Managed on-ground operations, resolved technical issues in real time, and coordinated across teams under high-pressure conditions — learning leadership, accountability, and calm decision-making at scale.",
  },
  {
    year: "2025",
    title: "PR & Crew Member — DevFest Hyderabad",
    org: "Google Developer Groups",
    desc:
      "Contributed to PR & outreach before the event and supported on-ground operations during DevFest. Worked closely with organisers, speakers, and attendees to ensure smooth coordination, clear communication, and a high-quality community experience.",
  },
  {
    year: "2024",
    title: "SilverElite Certification — Algorithms & Analysis",
    org: "NPTEL × IIT Kharagpur",
    desc:
      "Completed the ‘Introduction to Analysis and Algorithms’ course with Elite certification. Strengthened problem-solving discipline, algorithmic thinking, and consistency through rigorous assignments and evaluations.",
  },
  {
    year: "2024",
    title: "Treasurer — Yukti Veda Club",
    org: "Institution’s Innovation Council (IIC)",
    desc:
      "Organised and managed a student-led Startup Showcase featuring MVPs and early-stage ventures. Handled planning, coordination, and execution while supporting innovation, leadership, and cross-disciplinary collaboration on campus.",
  },
  {
    year: "2023 – 2024",
    title: "Won Hackathons & Built Personal Projects",
    org: "Independent",
    desc:
      "Participated in multiple hackathons and team-based builds, earning wins and recognition. Gained hands-on experience in rapid problem-solving, collaboration, and building practical solutions under tight deadlines.",
  },
];

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Horizontal movement
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(experiences.length - 1) * 100}%`]
  );

  return (
    <section
      id="experience"
      ref={ref}
      className="relative h-[220vh]"
    >
      {/* PINNED VIEW */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full">
          {/* HEADER */}
          <div className="max-w-7xl mx-auto px-6 mb-20">
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-indigo-400">journey</span>
            </h2>
          </div>

          {/* HORIZONTAL TRACK */}
          <motion.div
            style={{ x }}
            className="flex gap-12 px-[15vw]"
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="glass min-w-[340px] max-w-[360px] p-8"
              >
                <p className="text-sm text-indigo-400 mb-2">
                  {exp.year}
                </p>
                <h3 className="text-xl font-semibold mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {exp.org}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}