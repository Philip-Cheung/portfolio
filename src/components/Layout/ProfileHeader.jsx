import { portfolioData } from '../../data/portfolioData';

export default function ProfileHeader() {
  const { personal } = portfolioData;

  return (
    <div className="mb-16 mt-8 md:mt-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 whitespace-nowrap">
        {personal.name}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        {personal.title}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {personal.bio.split('.')[0]}.
      </p>
    </div>
  );
}

