import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js / React Native", color: "from-cyan-400 to-blue-400" },
        { name: "TypeScript / JavaScript", color: "from-magenta-400 to-purple-400" },
        { name: "Redux Toolkit / Context API", color: "from-purple-400 to-cyan-400" },
        { name: "HTML5 / CSS3", color: "from-cyan-500 to-magenta-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java 8+ / Spring Boot", color: "from-magenta-500 to-purple-500" },
        { name: "Spring Security / JWT", color: "from-slate-400 to-cyan-400" },
        { name: "Hibernate / JPA", color: "from-purple-400 to-magenta-400" },
        { name: "Apache Kafka / REST APIs", color: "from-cyan-600 to-purple-600" },
        { name: "Microservices / JUnit", color: "from-magenta-600 to-cyan-600" },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS (ECS, IoT Core, Lambda, EC2)", color: "from-cyan-400 to-purple-600" },
        { name: "Docker / CI/CD / NGINX", color: "from-magenta-400 to-cyan-400" },
        { name: "PostgreSQL / MySQL / MongoDB", color: "from-purple-500 to-cyan-500" },
        { name: "Git / Postman / Swagger", color: "from-cyan-500 to-magenta-500" },
        { name: "Agile / Scrum / TDD", color: "from-purple-600 to-magenta-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker mb-3">Tooling</p>
          <h2 className="section-title mb-5">
            Skills & Technologies
          </h2>
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-panel holo-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white font-semibold text-center hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-black/20`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};