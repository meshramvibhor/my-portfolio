"use client"
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { EducationAndCerts } from "@/app/components/EducationAndCerts";
import { Contact } from "@/app/components/Contact";
import { Navigation } from "@/app/components/Navigation";
import { MotionConfig } from "framer-motion";

const Index = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell relative min-h-screen overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="aurora-blob left-[-8rem] top-[8rem] h-[22rem] w-[22rem] bg-cyan-400/60"></div>
          <div className="aurora-blob right-[-10rem] top-[20rem] h-[30rem] w-[30rem] bg-fuchsia-500/50"></div>
          <div className="aurora-blob bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] bg-indigo-500/45"></div>
        </div>
        <Navigation />
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