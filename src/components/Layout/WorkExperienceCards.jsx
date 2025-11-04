import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function WorkExperienceCards() {
  const { workExperiences } = portfolioData;
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="space-y-6">
      {workExperiences.map((experience) => (
        <div
          key={experience.id}
          onClick={() => handleCardClick(experience.link)}
          className="block group cursor-pointer"
        >
          <div className="p-5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 shadow-sm hover:shadow-xl hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-lg font-bold text-gray-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primary transition-colors inline-flex items-center gap-2"
                  >
                    {experience.company}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <span className="text-gray-400 dark:text-gray-600">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {experience.location}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {experience.dates}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
            </div>

            {/* Role */}
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
              {experience.role}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {experience.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-primary hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
