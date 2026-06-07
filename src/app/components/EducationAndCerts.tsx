"use client";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "2025 – 2027",
    status: "Pursuing",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Nagpur University",
    location: "Maharashtra, India",
    period: "2019 – 2022",
    status: "69.3%",
  },
];

export const EducationAndCerts = () => {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Academics" title="Education" />

        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="glass-panel holo-border holo-card holo-sweep flex items-start gap-5 rounded-2xl p-6"
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-orb">
                  <GraduationCap className="text-cyan-300" size={20} />
                </span>
                <div>
                  <h4 className="font-display text-lg font-semibold leading-snug text-white">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-cyan-300">{edu.institution}</p>
                  <p className="text-sm text-slate-400">{edu.location}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-3 py-1 text-xs text-cyan-300">
                      {edu.period}
                    </span>
                    <span className="rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-3 py-1 text-xs text-violet-200">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
