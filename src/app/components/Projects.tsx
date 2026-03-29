export const Projects = () => {
  const projects = [
    {
      title: "DMS – Dymond Management System",
      description: "SaaS IoT platform for managing vending machines, car washes, and laundromats across US and Canada. Built microservices for device lifecycle, real-time monitoring, and alerting — supporting 1,200+ active devices. Implemented Spring Security with ACL for role-based merchant access.",
      technologies: ["Spring Boot", "Microservices", "AWS IoT Core", "Docker", "PostgreSQL", "React.js", "JWT"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    },
    {
      title: "WeVend – Unattended Vending Platform",
      description: "Full-stack web and Android application for unattended vending operations deployed across multiple US and Canada locations. Built Spring Boot backend with PostgreSQL for inventory and device health, and delivered end-to-end React.js and React Native UI screens with real-time payment and device sync.",
      technologies: ["Spring Boot", "React.js", "React Native", "PostgreSQL", "AWS", "REST APIs"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop",
    },
    {
      title: "eGift Solutions – Gift Card App",
      description: "Clover Android app for gift card lifecycle management — activation, redemption, balance top-up, and refunds — adopted by 300+ merchants across 600+ devices in US and Canada. Added barcode scanning for fast card handling and a reporting dashboard with transaction charts.",
      technologies: ["React Native", "Java", "Clover SDK", "Android", "Barcode Scanning"],
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&h=300&fit=crop",
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-black/40 to-purple-900/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-cyan-400/30 hover:border-magenta-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                

              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-xm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:border-magenta-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};