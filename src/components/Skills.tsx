import React from 'react';

const skills = {
  languages: ['HTML', 'CSS', 'JavaScript', 'Python'],
  frameworks: ['React.js', 'Node.js', 'Express.js'],
  databases: ['MongoDB', 'MySQL'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard title="Languages" skills={skills.languages} />
          <SkillCard title="Frameworks" skills={skills.frameworks} />
          <SkillCard title="Databases" skills={skills.databases} />
          <SkillCard title="Tools" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}