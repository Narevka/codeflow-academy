
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme} 
      aria-label="Toggle theme"
      className={`p-2 rounded-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300 border border-gray-700' 
          : 'bg-yellow-50 hover:bg-yellow-100 text-amber-500 border border-yellow-100'
      }`}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.div>
    </Toggle>
  );
};
