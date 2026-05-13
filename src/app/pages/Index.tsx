"use client"
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { EducationAndCerts } from "@/app/components/EducationAndCerts";
import { Contact } from "@/app/components/Contact";
import { Navigation } from "@/app/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationAndCerts />
      <Contact />
    </div>
  );
};

export default Index;