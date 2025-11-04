import { ExternalLink } from 'lucide-react';

export default function CTASection({ text, link, isPrimary = true }) {
  const baseClasses = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200";
  const primaryClasses = "bg-brand-primary text-white hover:bg-brand-secondary hover:shadow-lg hover:scale-105";
  const secondaryClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  const classes = `${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`;

  if (!link) {
    return (
      <div className="max-w-3xl mx-auto my-16 px-8 text-center">
        <span className={classes}>{text}</span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-16 px-8 text-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {text}
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

