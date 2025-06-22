import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a full-stack developer focused on building high-performance, 
              scalable applications. Whether it's architecting backend systems, 
              optimizing frontend interactions, or deploying to cloud 
              infrastructure — I thrive on solving complex problems with clean, 
              modern tech.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              With hands-on experience in React, Node.js, MongoDB, AWS, and React Native, I bring end-to-end solutions to life that are built to grow and built to last.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 rounded-xl backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                  <Code className="text-cyan-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold">Clean Code</h3>
                  <p className="text-gray-400 text-sm mt-2">Writing maintainable and clean code</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-magenta-500/20 to-cyan-500/20 p-6 rounded-xl backdrop-blur-sm border border-magenta-400/30 hover:border-magenta-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-magenta-400/20">
                  <Palette className="text-magenta-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold">Creative Design</h3>
                  <p className="text-gray-400 text-sm mt-2">Crafting beautiful pixel perfect user interfaces</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 p-6 rounded-xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
                  <Zap className="text-purple-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold">Performance</h3>
                  <p className="text-gray-400 text-sm mt-2">Optimizing for speed, efficiency, and scalability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/30 hover:border-magenta-400/40 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">At a Glance</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">3+ years of development experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">Cloud deployment & DevOps</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">Full-stack web & mobile development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">Clover POS & gift card integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">Scalable and secure backend API design</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">CI/CD with Docker & Jenkins</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400"></span>
                    <span className="text-gray-300">AWS services: EC2, S3, Lambda, SQS, IoT Core</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">GraphQL & REST API development</span>
                  </div>
          
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-sm shadow-purple-400"></span>
                    <span className="text-gray-300">Test-driven development with Jest</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 shadow-sm shadow-cyan-500"></span>
                    <span className="text-gray-300">Agile development methodologies</span>
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