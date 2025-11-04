import { colorMap } from '../../utils/colorMap';

export default function HeroSection({ title, subtitle, primaryColor }) {
  const theme = colorMap[primaryColor] || colorMap.blue;

  return (
    <div className={`${theme.bg} ${theme.text} py-24 px-8`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl opacity-90">{subtitle}</p>
      </div>
    </div>
  );
}

