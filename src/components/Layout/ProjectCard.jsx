import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(project.link)}
      className="relative rounded-xl overflow-hidden cursor-pointer group h-80 lg:h-96 transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Hero Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 via-purple-500/80 to-blue-500/80">
        {/* Placeholder gradient - replace with actual image when available */}
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {project.title}
        </h3>
        <p className="text-white/90 text-sm mb-2">
          {project.date} • {project.type}
        </p>
        <p className="text-white/80 text-base line-clamp-2">
          {project.description}
        </p>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
    </div>
  );
}

