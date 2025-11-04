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
      <div className="w-full md:w-[340px] lg:w-[380px]">
        <StickyResume />
      </div>

      {/* Right Content - Scrollable Sections */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto pl-4 md:pl-6 pr-8 md:pr-12 lg:pr-16 py-16 md:py-24">
          {/* About Section */}
          <section id="about" className="mb-24 scroll-mt-24">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                About
              </h2>
              <div className="h-1 w-16 bg-brand-primary"></div>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {personal.bio}
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Experience
              </h2>
              <div className="h-1 w-16 bg-brand-primary"></div>
            </div>
            <WorkExperienceCards />
          </section>

          {/* Education Section */}
          <section id="education" className="mb-24 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Education
              </h2>
              <div className="h-1 w-16 bg-brand-primary"></div>
            </div>
            <EducationSection />
          </section>
        </div>
      </div>
    </div>
  );
}
