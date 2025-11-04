import HeroSection from './HeroSection';
import ImageSection from './ImageSection';
import TextSection from './TextSection';
import GallerySection from './GallerySection';
import CTASection from './CTASection';

export default function ProjectLayout({ projectData }) {
  const renderSection = (section, index) => {
    // Skip malformed sections with console warning
    if (!section.type) {
      console.warn(`Section at index ${index} is missing type field`);
      return null;
    }

    switch (section.type) {
      case 'hero':
        return (
          <HeroSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            primaryColor={projectData.primaryColor}
          />
        );
      
      case 'image':
        if (!section.src || !section.alt) {
          console.warn(`Image section at index ${index} is missing required fields`);
          return null;
        }
        return (
          <ImageSection
            key={index}
            src={section.src}
            alt={section.alt}
            caption={section.caption}
            width={section.width}
          />
        );
      
      case 'text':
        if (!section.content) {
          console.warn(`Text section at index ${index} is missing content`);
          return null;
        }
        return (
          <TextSection
            key={index}
            heading={section.heading}
            content={section.content}
            align={section.align}
          />
        );
      
      case 'gallery':
        if (!section.images || section.images.length === 0) {
          console.warn(`Gallery section at index ${index} has no images`);
          return null;
        }
        return (
          <GallerySection
            key={index}
            columns={section.columns}
            images={section.images}
            gap={section.gap}
          />
        );
      
      case 'cta':
        if (!section.text) {
          console.warn(`CTA section at index ${index} is missing text`);
          return null;
        }
        return (
          <CTASection
            key={index}
            text={section.text}
            link={section.link}
            isPrimary={section.isPrimary}
          />
        );
      
      default:
        console.warn(`Unknown section type "${section.type}" at index ${index}`);
        return null;
    }
  };

  return (
    <div className="bg-white">
      {projectData.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}

