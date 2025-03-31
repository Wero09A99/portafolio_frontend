"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between py-20"
    >
      <div className="md:w-1/2 mb-10 md:mb-0">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Desarrollador Frontend
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Especializado en crear experiencias web modernas con Next.js, TypeScript y Tailwind CSS.
        </motion.p>
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors">
            <FaTwitter />
          </a>
        </motion.div>
      </div>
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-5xl font-bold">
            ND
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
