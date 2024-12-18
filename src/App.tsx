import React from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/Projects';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/simran-bhatt-a7b5b6239/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:email@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;