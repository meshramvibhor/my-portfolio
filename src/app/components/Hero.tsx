"use client";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const texts = ["Hi, I'm Vibhor Meshram", "A Java Full Stack Developer"];
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTextIndex]);

  const stats = [
    { label: "Experience", value: "4+ yrs" },
    { label: "IoT Devices", value: "1,200+" },
    { label: "Merchants", value: "500+" },
    { label: "APIs Shipped", value: "100+" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28"
    >
      {/* HUD corner brackets */}
      <div className="pointer-events-none absolute inset-6 hidden lg:block">
        <div className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-cyan-400/40" />
        <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-fuchsia-400/40" />
        <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-fuchsia-400/40" />
        <div className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-cyan-400/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          className="glass-panel holo-border pulse-border holo-sweep card-scan relative mx-auto w-full rounded-[2rem] p-8 md:p-14 lg:px-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <span className="scan" aria-hidden />

          <motion.p
            variants={item}
            className="section-kicker mb-5 inline-flex items-center gap-2"
          >
            <Sparkles size={13} className="text-cyan-300" />
            Java Full Stack Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl"
          >
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 bg-clip-text text-transparent neon-text">
              {displayedText}
              <span className="animate-pulse text-cyan-200">|</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-slate-300 md:text-xl"
          >
            Building production-grade products with Java, Spring Boot, and React across
            IoT, SaaS, and fintech. I design secure microservices, real-time data flows,
            and cloud-native systems that stay reliable at scale.
          </motion.p>

          <motion.div variants={item} className="mb-12 flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="btn-neon rounded-xl px-8 py-3 text-sm md:text-base"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              Let&apos;s Connect
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-ghost rounded-xl px-8 py-3 text-sm font-semibold md:text-base"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore My Work
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mx-auto mb-10 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="holo-card chip float-soft rounded-2xl px-4 py-4 text-left"
                style={{ animationDelay: `${index * 0.4}s` }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/80">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-2xl font-bold gradient-text">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex justify-center space-x-6">
            {[
              { Icon: Github, href: "https://github.com/meshramvibhor", hover: "hover:text-cyan-300" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vibhor-meshram2748/", hover: "hover:text-fuchsia-300" },
              { Icon: Mail, href: "mailto:vibhor.meshram.work@gmail.com", hover: "hover:text-indigo-300" },
            ].map(({ Icon, href, hover }) => (
              <motion.a
                key={href}
                href={href}
                className={`text-slate-400 transition-colors duration-300 ${hover}`}
                whileHover={{ y: -4, scale: 1.18 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span className="font-display text-[0.6rem] tracking-[0.4em] text-slate-500">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="animate-bounce text-cyan-300/70" size={20} />
        </motion.div>
      </div>
    </section>
  );
};
