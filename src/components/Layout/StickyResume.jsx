import { Mail, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useState } from 'react';

export default function StickyResume() {
  const { personal } = portfolioData;
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="sticky top-0 h-screen overflow-y-auto scrollbar-thin bg-white dark:bg-navy-950 border-r border-gray-200 dark:border-navy-800 p-12 flex flex-col">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {personal.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {personal.title}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {personal.bio.split('.')[0]}.
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mb-16">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-4 text-left w-full transition-all"
              >
                <span 
                  className={`h-px bg-gray-400 dark:bg-gray-600 transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'w-16 bg-gray-900 dark:bg-white' 
                      : 'w-8 group-hover:w-16 group-hover:bg-gray-900 dark:group-hover:bg-white'
                  }`}
                />
                <span 
                  className={`text-xs font-semibold tracking-widest transition-colors ${
                    activeSection === item.id
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-auto">
        <a
          href={personal.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
