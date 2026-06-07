"use client";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { EducationAndCerts } from "@/app/components/EducationAndCerts";
import { Contact } from "@/app/components/Contact";
import { Navigation } from "@/app/components/Navigation";
import { Preloader } from "@/app/components/Preloader";
import { CursorGlow } from "@/app/components/CursorGlow";
import SceneBackground from "@/app/components/three/SceneBackground";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionConfig reducedMotion="user">
      <Preloader />

      {/* Persistent WebGL universe */}
      <SceneBackground />

      {/* Cinematic atmosphere layers */}
      <div className="cinematic-overlay" aria-hidden />
      <div className="grain-overlay" aria-hidden />
      <CursorGlow />

      {/* Global scroll progress beam */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400"
        style={{ scaleX }}
      />

      {/* Nav sits above cinematic overlays so it stays crisp and solid */}
      <Navigation />

      <div className="app-shell relative min-h-screen overflow-x-clip">
        {/* Soft aurora accents that drift behind glass content */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="aurora-blob left-[-8rem] top-[8rem] h-[22rem] w-[22rem] bg-cyan-400/50" />
          <div className="aurora-blob right-[-10rem] top-[40rem] h-[30rem] w-[30rem] bg-fuchsia-500/45" />
          <div className="aurora-blob bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] bg-indigo-500/40" />
        </div>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <EducationAndCerts />
        <Contact />
      </div>
    </MotionConfig>
  );
};

export default Index;
