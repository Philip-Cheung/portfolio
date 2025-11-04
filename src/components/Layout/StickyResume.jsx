import ProfileHeader from './ProfileHeader';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default function StickyResume() {
  return (
    <div className="flex flex-col h-full">
      <ProfileHeader />
      <Navigation />
      <SocialLinks />
    </div>
  );
}
