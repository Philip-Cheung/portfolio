import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  // Initialize state from the HTML element's class list
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  // On mount, check localStorage and apply saved preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    console.log('Initial load - savedMode:', savedMode);
    
    if (savedMode === 'true') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (savedMode === 'false') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    console.log('🌓 Toggle clicked! Current isDark:', isDark);
    
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    
    console.log('🌓 Setting new mode:', newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      console.log('🌙 Added dark class to HTML');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('☀️ Removed dark class from HTML');
    }
    
    localStorage.setItem('darkMode', String(newDarkMode));
    console.log('💾 Saved to localStorage:', newDarkMode);
    
    // Verify it worked
    console.log('✅ HTML classList:', document.documentElement.classList.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Toggle dark mode"
      type="button"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}
