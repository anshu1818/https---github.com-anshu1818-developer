import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: Array<{
    name: string;
    level: number;
    icon?: string;
  }>;
  color: string;
}

export function SkillCard({ title, skills, color }: SkillCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className={`text-xl font-semibold ${color} mb-4 flex items-center`}>
        <CheckCircle2 className="w-5 h-5 mr-2" />
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-full ${color.replace('text-', 'bg-')}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}