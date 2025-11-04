import StickyResume from '../components/Layout/StickyResume';
import WorkExperienceCards from '../components/Layout/WorkExperienceCards';

export default function Landing() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Sidebar - Sticky Resume */}
      <div className="w-full md:w-1/3 lg:w-1/4">
        <StickyResume />
      </div>

      {/* Right Content - Scrollable Work Experience */}
      <div className="w-full md:w-2/3 lg:w-3/4 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16">
          <WorkExperienceCards />
        </div>
      </div>
    </div>
  );
}

