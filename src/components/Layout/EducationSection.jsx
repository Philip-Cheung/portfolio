import { portfolioData } from '../../data/portfolioData';

export default function EducationSection() {
  const { education, skills } = portfolioData;

  // Mock certifications data
  const certifications = [
    "Advanced Design Thinking Certification",
    "UX Research Professional Certificate",
    "Certified Scrum Product Owner (CSPO)",
    "Design Leadership Certificate"
  ];

  return (
    <div className="space-y-12">
      {/* Education Block */}
      <div className="bg-gray-50 dark:bg-navy-900/30 rounded-xl p-8 border border-gray-100 dark:border-navy-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Education & Certifications
        </h2>

        {/* Education */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {edu.degree}, {edu.field}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {edu.school} ({edu.year})
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="text-brand-primary mt-1.5">•</span>
                <span className="text-sm">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Skills & Expertise
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 text-gray-700 dark:text-gray-300 hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

