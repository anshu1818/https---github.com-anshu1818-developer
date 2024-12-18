import React from 'react';

const projects = [
  {
    title: "E-commerce Website",
    description: "Developed a full-stack e-commerce platform using MERN stack with features like user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c"
  },
  {
    title: "Portfolio Website",
    description: "Created a responsive portfolio website using React and Tailwind CSS to showcase projects and skills.",
    technologies: ["React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}