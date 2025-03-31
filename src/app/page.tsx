import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import { Project, Skill } from '@/types';

export default function Home() {
  // Datos de ejemplo para los proyectos
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Una plataforma de comercio electrónico completa construida con Next.js, TypeScript y Tailwind CSS. Incluye carrito de compras, pagos y panel de administración.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/images/ecommerce.jpg",
      githubUrl: "https://github.com/username/ecommerce",
      demoUrl: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, filtros y estadísticas. Desarrollada con React, TypeScript y integración con Firebase.",
      tags: ["React", "TypeScript", "Firebase", "Redux"],
      image: "/images/taskapp.jpg",
      githubUrl: "https://github.com/username/taskapp",
      demoUrl: "https://taskapp-demo.com"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con animaciones fluidas, modo oscuro y diseño responsivo. Construido con Next.js y Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/images/portfolio.jpg",
      githubUrl: "https://github.com/username/portfolio",
      demoUrl: "https://portfolio-demo.com"
    }
  ];

  // Datos de ejemplo para las habilidades
  const skills: Skill[] = [
    { name: "TypeScript", icon: "/icons/typescript.svg", level: 90 },
    { name: "React", icon: "/icons/react.svg", level: 95 },
    { name: "Next.js", icon: "/icons/nextjs.svg", level: 85 },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg", level: 90 },
    { name: "Node.js", icon: "/icons/nodejs.svg", level: 80 },
    { name: "GraphQL", icon: "/icons/graphql.svg", level: 75 },
    { name: "Docker", icon: "/icons/docker.svg", level: 70 },
    { name: "AWS", icon: "/icons/aws.svg", level: 65 },
  ];

  return (
    <>
      <Hero />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ContactSection />
    </>
  );
}