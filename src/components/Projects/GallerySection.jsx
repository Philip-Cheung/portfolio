import { useState } from 'react';
import { ImageOff } from 'lucide-react';

function GalleryImage({ src, alt, caption }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      {hasError ? (
        <div className="bg-gray-200 h-64 rounded-lg flex flex-col items-center justify-center text-gray-500">
          <ImageOff className="w-8 h-8 mb-2" />
          <p className="text-sm">Image not available</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      )}
      {caption && !hasError && (
        <p className="text-sm text-gray-600 mt-3 text-center">{caption}</p>
      )}
    </div>
  );
}

export default function GallerySection({ columns = 2, images, gap = 'medium' }) {
  const gapClasses = {
    small: 'gap-4',
    medium: 'gap-8',
    large: 'gap-12'
  };

  const columnClasses = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3'
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-8">
      <div className={`grid grid-cols-1 ${columnClasses[columns]} ${gapClasses[gap]}`}>
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
          />
        ))}
      </div>
    </div>
  );
}

