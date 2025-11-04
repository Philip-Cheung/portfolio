import { Mail, Linkedin, Github, Globe } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function StickyResume() {
  const { personal, skills, education } = portfolioData;

  return (
    <div className="sticky top-0 h-screen overflow-y-auto scrollbar-thin bg-white border-r border-gray-200 p-8">
      {/* Profile Section */}
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary mb-6 flex items-center justify-center text-white text-4xl font-bold">
          {personal.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{personal.name}</h1>
        <p className="text-lg text-brand-primary font-medium mb-4">{personal.title}</p>
        <p className="text-gray-600 leading-relaxed">{personal.bio}</p>
      </div>

      {/* Contact Links */}
      <div className="mb-8 space-y-3">
        <a 
          href={`mailto:${personal.email}`}
          className="flex items-center gap-3 text-gray-700 hover:text-brand-primary transition-colors group"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm">{personal.email}</span>
        </a>
        <a 
          href={personal.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-700 hover:text-brand-primary transition-colors group"
        >
          <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a 
          href={personal.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-700 hover:text-brand-primary transition-colors group"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm">GitHub</span>
        </a>
        {personal.links.portfolio && (
          <a 
            href={personal.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-brand-primary transition-colors group"
          >
            <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">Portfolio</span>
          </a>
        )}
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-brand-primary hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-900">{edu.school}</h3>
            <p className="text-sm text-gray-600">{edu.degree} in {edu.field}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

