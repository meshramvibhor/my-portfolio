import { Briefcase } from "lucide-react";

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
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Career</p>
          <h2 className="section-title mb-5">
            Work Experience
          </h2>
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-magenta-400/40 to-purple-400/20 hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col sm:flex-row gap-8 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 items-center justify-center z-10 shadow-lg shadow-cyan-400/30">
                  <Briefcase size={20} className="text-white" />
                </div>

                {/* Card — alternates left/right on desktop */}
                <div className={`sm:w-[calc(50%-3rem)] ${index % 2 === 0 ? "sm:ml-0 sm:mr-auto" : "sm:ml-auto sm:mr-0"}`}>
                  <div className="glass-panel holo-border p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white leading-snug">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{exp.company}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-400 text-sm">{exp.location}</span>
                      </div>
                      <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border border-cyan-500/30">
                        {exp.period}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.summary}</p>

                    {/* Key highlights */}
                    {exp.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.highlights.map((h) => (
                          <span key={h} className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the opposite side */}
                <div className="hidden sm:block sm:w-[calc(50%-3rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
