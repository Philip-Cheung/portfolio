import StickyResume from '../components/Layout/StickyResume';
import WorkExperienceCards from '../components/Layout/WorkExperienceCards';
import EducationSection from '../components/Layout/EducationSection';
import ProjectCard from '../components/Layout/ProjectCard';
import DarkModeToggle from '../components/shared/DarkModeToggle';
import { portfolioData } from '../data/portfolioData';

export default function Landing() {
  const { workExperiences } = portfolioData;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Centered Container with Grid Layout */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column - Sidebar */}
          <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:py-16 py-8">
            <StickyResume />
          </div>

          {/* Right Column - Content */}
          <div className="py-8 lg:py-16">
            {/* Design Projects Section */}
            <section id="projects" className="mb-24 scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Design Projects
                </h2>
                <div className="h-1 w-16 bg-brand-primary"></div>
              </div>
              <div className="space-y-16">
                {workExperiences.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-24 scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Experience
                </h2>
                <div className="h-1 w-16 bg-brand-primary"></div>
              </div>
              <WorkExperienceCards />
            </section>

            {/* Education Section */}
            <section id="education" className="mb-24 scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Education
                </h2>
                <div className="h-1 w-16 bg-brand-primary"></div>
              </div>
              <EducationSection />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
