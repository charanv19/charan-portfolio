import { motion } from "framer-motion";

// import { useEffect, useState } from "react";
// 

// const sections = [
//   { id: "hero", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "skills", label: "Skills" },
//   { id: "projects", label: "Projects" },
//   { id: "experience", label: "Experience" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + window.innerHeight / 2;

//       for (const section of sections) {
//         const el = document.getElementById(section.id);
//         if (!el) continue;

//         const top = el.offsetTop;
//         const height = el.offsetHeight;

//         if (scrollPos >= top && scrollPos < top + height) {
//           setActive(section.id);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <nav className="backdrop-blur-md bg-black/40 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//           {/* LOGO */}
//           <a
//             href="#hero"
//             className="text-lg font-semibold tracking-tight"
//           >
//             Charan
//           </a>

//           {/* LINKS */}
//           <div className="hidden md:flex gap-8 text-sm relative">
//             {sections.map((s) => (
//               <a
//                 key={s.id}
//                 href={`#${s.id}`}
//                 className={`relative transition ${
//                   active === s.id
//                     ? "text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 {s.label}

//                 {active === s.id && (
//                   <motion.span
//                     layoutId="nav-indicator"
//                     className="absolute -bottom-2 left-0 right-0 h-[2px] bg-indigo-400 rounded-full"
//                     transition={{
//                       type: "spring",
//                       stiffness: 400,
//                       damping: 30,
//                     }}
//                   />
//                 )}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }


// 

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-black/40 border-b border-white/10 relative z-50">
        <div className="container-main h-16 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Charan
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 text-sm relative">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative whitespace-nowrap transition ${
                  active === s.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-indigo-400 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <button
            className="md:hidden text-2xl text-gray-300 hover:text-white transition z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN DROPDOWN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center border-t border-white/10"
          >
            <div className="flex flex-col gap-8 text-center">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-medium transition ${
                    active === s.id ? "text-indigo-400" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}