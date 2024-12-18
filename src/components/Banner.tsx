import React from 'react';
import { Download } from 'lucide-react';

export function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Software Developer</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and delivering high-quality software
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-opacity-90 transition-colors">
              Contact Me
            </a>
            <a href="/resume.pdf" className="inline-flex items-center px-8 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}