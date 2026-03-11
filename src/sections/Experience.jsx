import { motion } from "framer-motion";

import { useScroll, useTransform } from "framer-motion";
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
    offset: ["start start", "end end"], // 1. Changed "end start" to "end end" to eliminate the little gap below!
  });

  // Horizontal movement optimized for all screen widths
  // Animating only from 0 to 0.85 gives a 15% physical timeline pause where the last card just sits on the screen.
  const x = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"] // 2. Updated mathematically to support un-squished mobile cards
  );

  return (
    <section
      id="experience"
      ref={ref}
      className="relative h-[300vh]" // Expanded height for a slower, smoother scroll
    >
      {/* PINNED VIEW */}
      {/* Upgraded from h-screen to h-[100dvh] mapping to fix iOS/Safari address-bar jumping */}
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-center items-center overflow-hidden w-full" style={{ position: '-webkit-sticky' }}>
        <div className="w-full">
          {/* HEADER */}
          <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-20"> {/* 3. Responsive margin */}
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-2 md:mb-4">
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-indigo-400">journey</span>
            </h2>
          </div>

          {/* HORIZONTAL TRACK */}
          <motion.div
            style={{ x }}
            className="flex w-max gap-6 md:gap-12 pl-[5vw] pr-[15vw] md:pl-[15vw] md:pr-[30vw]" // 4. Padding on the right assures the last card rests comfortably inside the screen boundaries
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="glass w-[85vw] sm:min-w-[340px] sm:max-w-[360px] shrink-0 p-6 md:p-8" // 5. Responsive card sizing so it doesn't squish on phones
              >
                <p className="text-sm text-indigo-400 mb-2">
                  {exp.year}
                </p>
                <h3 className="text-xl font-semibold mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2 md:mb-4">
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