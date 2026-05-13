import { GraduationCap } from "lucide-react";

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
    <section id="education" className="py-20 relative">
      <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-gradient-to-br from-black/50 to-purple-900/30 p-6 rounded-2xl backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 flex items-start gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center border border-cyan-400/40 shrink-0 mt-1">
                  <GraduationCap className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg leading-snug">{edu.degree}</h4>
                  <p className="text-cyan-400 mt-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 border border-cyan-500/30">
                      {edu.period}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
