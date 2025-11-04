import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function WorkExperienceCards() {
  const { workExperiences } = portfolioData;

  return (
    <div className="space-y-8">
      {workExperiences.map((experience) => (
        <div key={experience.id}>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm transition-all duration-300">
            {/* Header - Role and Company */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.role} · 
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary dark:hover:text-brand-primary transition-colors inline-flex items-center gap-1 ml-1 group"
                  >
                    {experience.company}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.dates}     {experience.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {experience.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-primary transition-colors"
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
