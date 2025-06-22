import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Expense Manager Application",
      description: "A full-stack application using React, Node.js, GraphQL, and MySQL with secure auth, role-based access, and interactive charts. Designed scalable APIs and optimized database queries",
      technologies: ["ReactJs", "Node.js", "MongoDB", "ExpressJs", "GraphQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "News Application",
      description: "A real-time news application using React.js, Node.js, and Express.js with personalized topic filtering, auto-refresh, and a user-friendly interface for tailored content delivery.",
      technologies: ["ReactJs", "NodeJs", "Express", "3rd Party Api"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts, data visualization, and automated reporting capabilities.",
      technologies: ["React", "D3.js", "Node.js", "AWS", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      github: "#",
      live: "#"
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
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-black/50 rounded-full text-white hover:bg-cyan-600/70 transition-colors hover:shadow-lg hover:shadow-cyan-400/30"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-black/50 rounded-full text-white hover:bg-magenta-600/70 transition-colors hover:shadow-lg hover:shadow-magenta-400/30"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
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