import React from 'react';
import { motion } from 'framer-motion';
import { SkillsGrid } from './SkillsGrid';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            in various technologies and tools.
          </p>
        </motion.div>
        <SkillsGrid />
      </div>
    </section>
  );
}