import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function ImageSection({ src, alt, caption, width = 'full' }) {
  const [hasError, setHasError] = useState(false);

  const widthClasses = {
    full: 'max-w-full',
    large: 'max-w-5xl',
    medium: 'max-w-3xl',
    small: 'max-w-2xl'
  };

  return (
    <div className={`${widthClasses[width]} mx-auto my-12 px-8`}>
      {hasError ? (
        <div className="bg-gray-200 h-96 rounded-lg flex flex-col items-center justify-center text-gray-500">
          <ImageOff className="w-12 h-12 mb-3" />
          <p>Image not available</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      )}
      {caption && !hasError && (
        <p className="text-center text-gray-600 text-sm mt-4 italic">{caption}</p>
      )}
    </div>
  );
}

