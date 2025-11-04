import ProfileHeader from './ProfileHeader';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default function StickyResume() {
  return (
    <div className="sticky top-0 h-screen overflow-y-auto scrollbar-thin bg-white dark:bg-slate-900 p-8 md:p-10 pr-4 md:pr-6 flex flex-col">
      <ProfileHeader />
      <Navigation />
      <SocialLinks />
    </div>
  );
}
