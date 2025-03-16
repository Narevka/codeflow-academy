
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme} 
      aria-label="Toggle theme"
      className={`p-2 rounded-full transition-colors ${
        theme === 'dark' 
          ? 'bg-slate-700 hover:bg-slate-600' 
          : 'bg-slate-200 hover:bg-slate-300'
      }`}
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-yellow-300" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500" />
      )}
    </Toggle>
  );
};
