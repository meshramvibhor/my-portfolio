import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Profile</p>
          <h2 className="section-title mb-5">
            About Me
          </h2>
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I&apos;m a Java Full Stack Developer with 4+ years of experience building
              production-grade web and Android applications. I&apos;ve worked across IoT,
              SaaS, and fintech domains — designing microservices, securing APIs, and
              shipping real features used by real merchants across the US and Canada.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My core stack is Java, Spring Boot, React, and AWS. I care about writing
              maintainable code, making systems observable, and solving problems that
              actually matter to the business — not just to the codebase.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="glass-panel holo-border p-6 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Code className="text-cyan-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold">Clean Code</h3>
                  <p className="text-slate-400 text-sm mt-2">Maintainable patterns and long-term clarity</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="glass-panel holo-border p-6 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Palette className="text-magenta-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold">UX Clarity</h3>
                  <p className="text-slate-400 text-sm mt-2">Fast, intuitive interfaces that stay consistent</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="glass-panel holo-border p-6 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Zap className="text-purple-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold">Performance</h3>
                  <p className="text-slate-400 text-sm mt-2">Resilient systems designed to scale safely</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel holo-border p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">At a Glance</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">4+ years of full stack development experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">Java, Spring Boot & Microservices architecture</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">React.js & React Native — web and Android</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">1,200+ IoT devices managed across US & Canada</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">JWT & Spring Security — role-based access control</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">CI/CD with Docker & AWS deployments</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">AWS: ECS, EC2, Lambda, IoT Core, CloudWatch</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">REST APIs, JPA/Hibernate, Apache Kafka</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">JUnit testing & Agile development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 shadow-sm shadow-cyan-500"></span>
                    <span className="text-gray-300">Open to relocation across India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};