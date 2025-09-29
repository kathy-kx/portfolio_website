"use client";
import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 md:w-6 md:h-6">
        {/* Sun Icon for Light Mode */}
        <SunIcon
          className={`absolute inset-0 w-full h-full text-text-secondary transition-all duration-300 ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        {/* Moon Icon for Dark Mode */}
        <MoonIcon
          className={`absolute inset-0 w-full h-full text-text-secondary transition-all duration-300 ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;