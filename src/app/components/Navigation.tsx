"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 z-[70] w-full px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`mx-auto max-w-7xl rounded-2xl border-[1.5px] border-cyan-300 bg-[#243060] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_16px_48px_rgba(0,0,0,0.65),0_0_24px_rgba(34,211,238,0.25)] transition-all duration-500 ${
          scrolled
            ? "border-sky-300 bg-[#1f2952] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_56px_rgba(0,0,0,0.75),0_0_32px_rgba(34,211,238,0.32)]"
            : ""
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-lg font-bold md:text-xl"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-lg icon-orb">
              <span className="font-display text-xs font-black text-cyan-200">V</span>
            </span>
            <span className="text-white drop-shadow-[0_0_14px_rgba(103,232,249,0.55)]">
              Vibhor Meshram
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-cyan-100" : "text-white hover:text-cyan-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg border border-cyan-300 bg-cyan-400/25"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
            <motion.a
              href="/Vibhor_Meshram_Resume.pdf"
              download
              className="btn-neon ml-2 flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs md:text-sm"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={14} />
              Download CV
            </motion.a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-cyan-300/40 bg-[#1e2a52] p-2 text-cyan-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mx-3 mb-3 space-y-1 rounded-xl border border-white/15 bg-slate-950/80 px-2 pb-3 pt-2 backdrop-blur-xl">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-slate-200 transition-colors duration-300 hover:bg-white/5 hover:text-cyan-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/Vibhor_Meshram_Resume.pdf"
                  download
                  className="flex items-center gap-2 rounded-lg px-3 py-2 font-semibold text-cyan-200 transition-colors duration-300 hover:text-fuchsia-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={16} /> Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};
