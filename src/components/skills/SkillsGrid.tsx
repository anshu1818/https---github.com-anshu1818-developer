import React from 'react';
import { Code2, Database, Wrench, Layout } from 'lucide-react';
import { SkillCard } from './SkillCard';

const skillsData = {
  languages: [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
  ],
  frameworks: [
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
  ],
  databases: [
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 75 },
  ],
  tools: [
    { name: 'Git/GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 80 },
  ],
};

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <SkillCard
        title="Languages"
        skills={skillsData.languages}
        color="text-blue-600"
      />
      <SkillCard
        title="Frameworks"
        skills={skillsData.frameworks}
        color="text-purple-600"
      />
      <SkillCard
        title="Databases"
        skills={skillsData.databases}
        color="text-green-600"
      />
      <SkillCard
        title="Tools"
        skills={skillsData.tools}
        color="text-orange-600"
      />
    </div>
  );
}