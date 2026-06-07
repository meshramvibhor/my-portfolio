"use client";
import { motion } from "framer-motion";
import { Layers, Server, Cloud } from "lucide-react";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    Icon: Layers,
    accent: "from-cyan-400 to-blue-500",
    dot: "bg-cyan-400 shadow-cyan-400",
    skills: [
      "React.js / React Native",
      "TypeScript / JavaScript",
      "Redux Toolkit / Context API",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend",
    Icon: Server,
    accent: "from-fuchsia-500 to-violet-500",
    dot: "bg-fuchsia-400 shadow-fuchsia-400",
    skills: [
      "Java 8+ / Spring Boot",
      "Spring Security / JWT",
      "Hibernate / JPA",
      "Apache Kafka / REST APIs",
      "Microservices / JUnit",
    ],
  },
  {
    title: "Cloud & Tools",
    Icon: Cloud,
    accent: "from-violet-400 to-cyan-500",
    dot: "bg-violet-400 shadow-violet-400",
    skills: [
      "AWS (ECS, IoT Core, Lambda, EC2)",
      "Docker / CI/CD / NGINX",
      "PostgreSQL / MySQL / MongoDB",
      "Git / Postman / Swagger",
      "Agile / Scrum / TDD",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Tooling" title="Skills & Technologies" />

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-panel holo-border holo-card card-scan rounded-3xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className="scan" aria-hidden />
              <div className="mb-8 flex flex-col items-center gap-3">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg shadow-cyan-500/20`}
                >
                  <category.Icon className="text-white" size={26} />
                </span>
                <h3 className="font-display text-xl font-bold text-cyan-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="group/skill flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06]"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ x: 4 }}
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${category.dot} shadow-[0_0_10px] transition-transform duration-300 group-hover/skill:scale-150`}
                    />
                    <span className="text-sm font-medium text-slate-200">{skill}</span>
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
