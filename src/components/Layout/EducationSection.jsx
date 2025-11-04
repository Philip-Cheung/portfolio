import { portfolioData } from '../../data/portfolioData';

export default function EducationSection() {
  const { education, certifications } = portfolioData;

  return (
    <div className="space-y-8">
      {/* Education Card */}
      <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-6">
          Education
        </h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index}>
              <p className="text-base font-semibold text-white">
                {edu.degree}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {edu.school} ({edu.year})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Card */}
      <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-6">
          Certifications
        </h3>
        <ul className="space-y-3">
          {certifications.map((cert, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="text-gray-500 mt-1">•</span>
              <span className="text-sm">{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

