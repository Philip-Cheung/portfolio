import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project, isLast }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(project.link);
  };
  
  return (
    <div 
      onClick={handleClick}
      className={`cursor-pointer group py-8 ${!isLast ? 'border-b border-gray-200 dark:border-slate-700' : ''}`}
    >
      <div className="flex gap-8 items-center">
        {/* Image - Left Side */}
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-orange-400/90 via-purple-500/90 to-blue-500/90 transition-transform duration-300 group-hover:scale-105">
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

