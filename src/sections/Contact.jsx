import { motion } from "framer-motion";


import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaEye,
} from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: FaEnvelope,
    href: "mailto:charanvenishetti@gmail.com?subject=Opportunity%20Discussion&body=Hi%20Charan,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ARegards,",
    gradient: "from-emerald-500 to-teal-500",
    type: "link",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/charan-venishetti-b16715235",
    gradient: "from-sky-500 to-blue-600",
    type: "link",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/charanv19",
    gradient: "from-purple-500 to-fuchsia-600",
    type: "link",
  },
  {
    label: "Resume",
    icon: FaFileDownload,
    viewHref: "/resume/Charan_Venishetti.pdf",
    downloadHref: "/resume/Charan_Venishetti.pdf",
    gradient: "from-orange-500 to-red-500",
    type: "resume",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mt-24 md:mt-0 z-20">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s build something{" "}
            <span className="text-indigo-400">meaningful</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Open to opportunities, collaborations, and thoughtful product work.
          </p>
        </motion.div>

        {/* ACTION GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contacts.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -12 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`relative rounded-2xl p-[1px] bg-gradient-to-r ${item.gradient} group cursor-pointer`}
            >
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full w-full rounded-2xl bg-black py-10 flex flex-col items-center justify-center gap-4 overflow-hidden"
              >

                {/* WHOLE CARD CLICK (for links) */}
                {item.type === "link" && (
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="absolute inset-0 z-10"
                    aria-label={item.label}
                  />
                )}

                {/* ICON */}
                <item.icon className="text-3xl text-white" />

                {/* LABEL */}
                <p className="text-lg font-medium text-white">
                  {item.label}
                </p>

                {/* RESUME ACTIONS */}
                {item.type === "resume" && (
                  <div className="flex gap-6 mt-2 z-10">
                    <a
                      href={item.viewHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                    >
                      <FaEye /> View
                    </a>

                    <a
                      href={item.downloadHref}
                      download
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                    >
                      <FaFileDownload /> Download
                    </a>
                  </div>
                )}

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}