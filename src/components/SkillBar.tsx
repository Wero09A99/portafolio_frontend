"use client";

import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-200 font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
