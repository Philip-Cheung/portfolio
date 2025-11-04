import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(project.link);
  };
  
  return (
    <div className="space-y-6">
      {/* Hero Image - Clickable */}
      <div 
        onClick={handleClick}
        className="relative rounded-2xl overflow-hidden cursor-pointer group h-96 lg:h-[500px]"
      >
        {/* Placeholder gradient - replace with actual image when available */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/90 via-purple-500/90 to-blue-500/90 transition-all duration-300 group-hover:scale-105">
        </div>
        
        {/* Title Overlay on Image */}
        <div className="relative h-full flex items-center justify-center p-12">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight">
            {project.title}
          </h3>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      {/* Content Below Image */}
      <div className="space-y-4">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h4>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project.date} • {project.type}
        </p>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          {project.description}
        </p>
        
        {/* CTA Link */}
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-medium transition-colors group/btn"
        >
          Read on LinkedIn
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

