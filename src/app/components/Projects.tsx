"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const projects = [
  {
    title: "DMS – Dymond Management System",
    description:
      "SaaS IoT platform managing vending machines, car washes, and laundromats across US and Canada — supporting 1,200+ active devices. Built 4 microservices (User, Device, Device Comm, Notification) deployed on AWS ECS. Integrated AWS IoT Core + Kafka for async device event processing, WebSockets for real-time UI updates, and Spring Security with ACL-driven RBAC across 500+ merchant accounts.",
    technologies: ["Java 17", "Spring Boot 3", "React 18", "AWS ECS", "AWS IoT Core", "Kafka", "WebSocket", "PostgreSQL", "JWT", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  },
  {
    title: "WeVend – Unattended Vending Platform",
    description:
      "Full-stack web and Android application for unattended vending operations deployed across multiple US and Canada locations. Built Spring Boot backend with PostgreSQL for inventory and device health, and delivered end-to-end React.js and React Native UI screens with real-time payment and device sync.",
    technologies: ["Spring Boot", "React.js", "React Native", "PostgreSQL", "AWS", "REST APIs"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop",
  },
  {
    title: "eGift Solutions – Gift Card App",
    description:
      "Clover Android app for gift card lifecycle management — activation, redemption, balance top-up, and refunds — adopted by 300+ merchants across 600+ devices in US and Canada. Added barcode scanning for fast card handling and a reporting dashboard with transaction charts.",
    technologies: ["React Native", "Java", "Clover SDK", "Android", "Barcode Scanning"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&h=300&fit=crop",
  },
];

type Project = (typeof projects)[number];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="group glass-panel holo-border overflow-hidden rounded-3xl"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden" style={{ transform: "translateZ(40px)" }}>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/60 text-cyan-200 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="mb-3 font-display text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip rounded-full px-3 py-1 text-xs text-cyan-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Builds" title="Featured Projects" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
