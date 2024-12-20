import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Simran Bhatt</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#experience" className="text-gray-700 hover:text-gray-900">Experience</a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}