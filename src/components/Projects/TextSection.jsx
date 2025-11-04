export default function TextSection({ heading, content, align = 'left' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`max-w-3xl mx-auto my-16 px-8 ${alignClasses[align]}`}>
      {heading && (
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{heading}</h2>
      )}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
        {content}
      </div>
    </div>
  );
}

