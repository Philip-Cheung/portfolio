import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProjectNavbar({ title }) {
  const navigate = useNavigate();

  const handleBack = () => {
    // Try to go back, but fallback to home if no history
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Resume</span>
          </button>
          <span className="text-gray-300">|</span>
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>
      </div>
    </nav>
  );
}

