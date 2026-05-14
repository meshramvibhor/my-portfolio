import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause before erasing
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Erasing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished erasing, move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTextIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-20 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"></div>
        <div className="absolute left-1/2 top-24 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-400/20 blur-[110px]"></div>
        <div className="absolute right-[14%] top-52 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div
          className="glass-panel holo-border pulse-border rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-kicker mb-4">Java Full Stack Engineer</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 bg-clip-text text-transparent block">
              {displayedText}
              <span className="animate-pulse text-cyan-200">|</span>
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Building production-grade products with Java, Spring Boot, and React across
            IoT, SaaS, and fintech. I design secure microservices, real-time data flows,
            and cloud-native systems that stay reliable at scale.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.a
              href="#contact"
              className="text-sm md:text-base bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-slate-950 px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              Let&apos;s Connect
            </motion.a>
            <motion.a
              href="#projects"
              className="text-sm md:text-base border border-white/20 text-slate-100 px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:border-cyan-300/40"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-10">
            {[
              { label: "Experience", value: "4+ years" },
              { label: "IoT Devices", value: "1,200+" },
              { label: "Merchant Accounts", value: "500+" },
              { label: "APIs Delivered", value: "100+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-left float-soft"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-200/80">
                  {stat.label}
                </p>
                <p className="text-xl font-semibold text-white mt-1">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center space-x-5">
            <motion.a
              href="https://github.com/meshramvibhor"
              className="text-slate-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
              aria-label="GitHub profile"
              whileHover={{ y: -3, scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vibhor-meshram2748/"
              className="text-slate-400 hover:text-fuchsia-300 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn profile"
              whileHover={{ y: -3, scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={30} />
            </motion.a>
            <motion.a
              href="mailto:vibhor.meshram.work@gmail.com"
              className="text-slate-400 hover:text-indigo-300 transition-all duration-300 hover:scale-110"
              aria-label="Email contact"
              whileHover={{ y: -3, scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={30} />
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center animate-bounce">
          <ArrowDown className="text-cyan-300/70" size={22} />
        </div>
      </div>
    </section>
  );
};