import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function WorkExperienceCards() {
  const { workExperiences } = portfolioData;

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Work Experience</h2>
        <p className="text-gray-600">Selected projects showcasing my design journey</p>
      </div>

      {workExperiences.map((experience) => (
        <Link
          key={experience.id}
          to={experience.link}
          className="block group"
        >
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-brand-primary transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                      {experience.company}
                    </h3>
                    <p className="text-sm text-gray-500">{experience.dates}</p>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
            </div>

            <p className="text-brand-primary font-medium mb-3">{experience.role}</p>
            <p className="text-gray-600 leading-relaxed">{experience.description}</p>

            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-primary group-hover:gap-3 transition-all">
              View Project
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

