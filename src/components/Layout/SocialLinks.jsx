import { Mail, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function SocialLinks() {
  const { personal } = portfolioData;

  const links = [
    {
      href: personal.links.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      external: true
    },
    {
      href: `mailto:${personal.email}`,
      icon: Mail,
      label: 'Email',
      external: false
    }
  ];

  return (
    <div className="flex items-center justify-start gap-6">
      {links.map((link) => {
        const Icon = link.icon;
        const props = link.external ? {
          target: '_blank',
          rel: 'noopener noreferrer'
        } : {};

        return (
          <a
            key={link.label}
            href={link.href}
            {...props}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label={link.label}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}

