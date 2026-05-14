import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 w-full z-50 px-4">
      <div className="mx-auto max-w-7xl glass-panel holo-border rounded-2xl">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-0.5 origin-left bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 rounded-t-2xl"
        />
        <div className="flex justify-between items-center py-4 px-5 lg:px-8">
          <div className="font-semibold text-lg md:text-xl bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 bg-clip-text text-transparent">
            Vibhor Meshram
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-slate-200 text-sm lg:text-[0.95rem] px-2 py-1 rounded-lg hover:text-cyan-200 hover:bg-white/5 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="/Vibhor_Meshram_Resume.pdf"
              download
              className="text-xs md:text-sm bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-slate-950 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-200 bg-white/5 border border-white/15 rounded-lg p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="mx-3 mb-3 px-2 pt-2 pb-3 space-y-1 bg-slate-950/80 backdrop-blur-xl rounded-xl border border-white/15">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-slate-200 hover:text-cyan-200 hover:bg-white/5 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Vibhor_Meshram_Resume.pdf"
                download
                className="block px-3 py-2 text-cyan-200 font-semibold hover:text-fuchsia-200 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};