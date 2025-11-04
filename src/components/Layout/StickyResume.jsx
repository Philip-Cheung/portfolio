import ProfileHeader from './ProfileHeader';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default function StickyResume() {
  return (
    <div className="flex flex-col">
      <ProfileHeader />
      <Navigation />
      <SocialLinks />
    </div>
  );
}
