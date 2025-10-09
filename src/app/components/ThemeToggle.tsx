'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'dark':
        return <Moon className="w-5 h-5 text-blue-400" />;
      case 'system':
        return <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
      default:
        return <Sun className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      title={`Current theme: ${theme}`}
    >
      <motion.div
        className="w-5 h-5 flex items-center justify-center"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;