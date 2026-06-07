"use client";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const experiences = [
  {
    role: "Software Engineer – Java Full Stack",
    company: "Metadesign Software",
    location: "Pune, India",
    period: "Jul 2022 – Present",
    summary:
      "Shipped production features across three SaaS products — an IoT device management platform, an unattended vending app, and a Clover gift card solution — serving merchants across the US and Canada. Worked across the full stack: Spring Boot 3 microservices on AWS ECS, React 18 and React Native frontends, async IoT pipelines with Kafka, and real-time device updates via WebSockets.",
    highlights: ["1,200+ IoT devices", "500+ merchant accounts", "100+ REST APIs", "300+ gift card merchants"],
    tags: ["Java 17", "Spring Boot 3", "React 18", "React Native", "AWS ECS", "Kafka", "WebSocket", "PostgreSQL", "Docker"],
  },
  {
    role: "Software Engineer Trainee – Java Full Stack",
    company: "Happily Ever",
    location: "Hyderabad, India",
    period: "Jan 2022 – Jun 2022",
    summary:
      "Contributed to UI screens and backend APIs for a consumer-facing application. Structured MongoDB data models for dynamic questionnaire and notification flows, and assisted with push notification integration and release-cycle testing.",
    highlights: [],
    tags: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Career" title="Work Experience" />

        <div className="relative">
          {/* Animated timeline beam */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px sm:left-1/2 sm:block">
            <div className="h-full w-full bg-gradient-to-b from-cyan-400/60 via-fuchsia-400/40 to-violet-400/10" />
            <div className="scan-bar absolute inset-0 w-full opacity-60" />
          </div>

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col gap-8 sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <motion.div
                  className="absolute left-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-400/40 sm:flex"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <span className="absolute inset-0 rounded-full border border-cyan-300/40 glow-pulse" />
                  <Briefcase size={18} className="text-white" />
                </motion.div>

                <motion.div
                  className={`sm:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "sm:ml-0 sm:mr-auto" : "sm:ml-auto sm:mr-0"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="glass-panel holo-border holo-card holo-sweep rounded-2xl p-7">
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-bold leading-snug text-white">
                        {exp.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-cyan-300">{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-sm text-slate-400">{exp.location}</span>
                      </div>
                      <span className="mt-3 inline-block rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-3 py-1 text-xs text-cyan-300">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-slate-300">{exp.summary}</p>

                    {exp.highlights.length > 0 && (
                      <div className="mb-5 flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="chip rounded-full px-2.5 py-0.5 text-xs text-violet-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
