
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme} 
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-transparent hover:bg-muted"
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-white" />
      ) : (
        <Sun className="h-5 w-5 text-black" />
      )}
    </Toggle>
  );
};
