'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-white/10 animate-pulse" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-yellow group-hover:text-orange transition-colors" />
      ) : (
        <Moon size={18} className="text-navy group-hover:text-purple transition-colors" />
      )}
    </button>
  );
}
