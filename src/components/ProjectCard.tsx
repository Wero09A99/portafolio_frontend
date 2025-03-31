"use client";

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xl font-bold">
          {project.title}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub className="mr-1" /> Código
          </a>
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <FaExternalLinkAlt className="mr-1" /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}