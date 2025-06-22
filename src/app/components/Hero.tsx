import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const texts = ["Hi, I'm Vibhor Meshram", "A Full Stack Developer"];

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 bg-clip-text text-transparent block mt-2 glow-text">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Crafting modern apps with React, Node.js, and React Native — from
            frontend to backend. Focused on performance, clean code, and cloud
            deployment that scales.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#contact"
              className="text-xl bg-gradient-to-r from-cyan-600 to-magenta-600 hover:from-cyan-700 hover:to-magenta-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/25 hover:shadow-magenta-400/25"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#projects"
              className="text-xl border-2 border-cyan-400/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:border-magenta-400/60 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={34} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-magenta-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={34} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={34} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400/60" size={24} />
        </div>
      </div>
    </section>
  );
};
