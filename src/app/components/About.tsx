"use client";
import { Code, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const pillars = [
  { Icon: Code, title: "Clean Code", desc: "Maintainable patterns and long-term clarity", color: "text-cyan-300" },
  { Icon: Palette, title: "UX Clarity", desc: "Fast, intuitive interfaces that stay consistent", color: "text-fuchsia-300" },
  { Icon: Zap, title: "Performance", desc: "Resilient systems designed to scale safely", color: "text-violet-300" },
];

const glance = [
  "4+ years of full stack development experience",
  "Java, Spring Boot & Microservices architecture",
  "React.js & React Native — web and Android",
  "1,200+ IoT devices managed across US & Canada",
  "JWT & Spring Security — role-based access control",
  "CI/CD with Docker & AWS deployments",
  "AWS: ECS, EC2, Lambda, IoT Core, CloudWatch",
  "REST APIs, JPA/Hibernate, Apache Kafka",
  "JUnit testing & Agile development",
  "Open to relocation across India",
];

export const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Profile" title="About Me" />

        <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-slate-300">
              I&apos;m a Java Full Stack Developer with 4+ years of experience building
              production-grade web and Android applications. I&apos;ve worked across IoT,
              SaaS, and fintech domains — designing microservices, securing APIs, and
              shipping real features used by real merchants across the US and Canada.
            </p>

            <p className="text-lg leading-relaxed text-slate-300">
              My core stack is Java, Spring Boot, React, and AWS. I care about writing
              maintainable code, making systems observable, and solving problems that
              actually matter to the business — not just to the codebase.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="glass-panel holo-border holo-card rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl icon-orb">
                    <p.Icon className={p.color} size={24} />
                  </span>
                  <h3 className="font-display font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-panel holo-border holo-card card-scan rounded-3xl p-8">
              <span className="scan" aria-hidden />
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 glow-pulse" />
                <h3 className="font-display text-2xl font-bold text-white">At a Glance</h3>
              </div>
              <div className="space-y-3">
                {glance.map((g, i) => (
                  <motion.div
                    key={g}
                    className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  >
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                        i % 2 === 0 ? "bg-cyan-400 shadow-[0_0_10px] shadow-cyan-400" : "bg-fuchsia-400 shadow-[0_0_10px] shadow-fuchsia-400"
                      }`}
                    />
                    <span className="text-slate-300">{g}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
