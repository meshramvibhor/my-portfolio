export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "ReactJs/NextJs", color: "from-cyan-400 to-blue-400" },
        { name: "React Native", color: "from-magenta-400 to-purple-400" },
        { name: "JavaScript/TypeScript", color: "from-purple-400 to-cyan-400" },
        { name: "HTML/CSS", color: "from-cyan-500 to-magenta-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", color: "from-magenta-500 to-purple-500" },
        { name: "Express.js", color: "from-slate-400 to-cyan-400" },
        { name: "GraphQL", color: "from-purple-400 to-magenta-400" },
        { name: "MongoDB/MySQL", color: "from-cyan-600 to-purple-600" },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", color: "from-cyan-400 to-purple-600" },
        { name: "Git", color: "from-magenta-400 to-cyan-400" },
        { name: "Docker", color: "from-purple-500 to-cyan-500" },
        { name: "CI/CD", color: "from-cyan-500 to-magenta-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto glow-border"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-black/60 to-purple-900/40 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/50 hover:border-magenta-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 glow-border"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={`p-4 rounded-lg bg-gradient-to-r ${skill.color} text-white font-semibold text-center hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
