import ProfileHeader from './ProfileHeader';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default function StickyResume() {
  return (
    <div className="sticky top-0 h-screen overflow-y-auto scrollbar-thin bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 p-12 flex flex-col">
      <ProfileHeader />
      <Navigation />
      <SocialLinks />
    </div>
  );
}
