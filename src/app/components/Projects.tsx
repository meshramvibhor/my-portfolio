import Image from "next/image";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "DMS – Dymond Management System",
      description: "SaaS IoT platform managing vending machines, car washes, and laundromats across US and Canada — supporting 1,200+ active devices. Built 4 microservices (User, Device, Device Comm, Notification) deployed on AWS ECS. Integrated AWS IoT Core + Kafka for async device event processing, WebSockets for real-time UI updates, and Spring Security with ACL-driven RBAC across 500+ merchant accounts.",
      technologies: ["Java 17", "Spring Boot 3", "React 18", "AWS ECS", "AWS IoT Core", "Kafka", "WebSocket", "PostgreSQL", "JWT", "Docker"],
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker mb-3">Builds</p>
          <h2 className="section-title mb-5">
            Featured Projects
          </h2>
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group glass-panel holo-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.99 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-slate-950/40 to-transparent opacity-70"></div>
                

              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/5 text-cyan-200 rounded-full border border-white/20 hover:border-cyan-300/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};