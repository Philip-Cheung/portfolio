import ProfileHeader from './ProfileHeader';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default function StickyResume() {
  return (
    <div className="sticky top-0 h-screen overflow-y-auto scrollbar-thin bg-white dark:bg-slate-900 p-8 md:p-10 pr-8 md:pr-10 flex flex-col text-right">
      <ProfileHeader />
      <Navigation />
      <SocialLinks />
    </div>
  );
}
