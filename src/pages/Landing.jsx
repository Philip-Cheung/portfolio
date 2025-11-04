import StickyResume from '../components/Layout/StickyResume';
import WorkExperienceCards from '../components/Layout/WorkExperienceCards';
import EducationSection from '../components/Layout/EducationSection';
import DarkModeToggle from '../components/shared/DarkModeToggle';
import { portfolioData } from '../data/portfolioData';

export default function Landing() {
  const { personal } = portfolioData;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Left Sidebar - Sticky Resume */}
      <div className="w-full md:w-1/3 lg:w-1/4">
        <StickyResume />
      </div>

      {/* Right Content - Scrollable Sections */}
      <div className="w-full md:w-2/3 lg:w-3/4 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24">
          {/* About Section */}
          <section id="about" className="mb-24 scroll-mt-24">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              About
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {personal.bio}
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24 scroll-mt-24">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
              Experience
            </h2>
            <WorkExperienceCards />
          </section>

          {/* Education Section */}
          <section id="education" className="mb-24 scroll-mt-24">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
              Education
            </h2>
            <EducationSection />
          </section>
        </div>
      </div>
    </div>
  );
}
