"use client";
import React from 'react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

const ThemeLogo = ({ className = "", width = 30, height = 30 }) => {
  const { isDark } = useTheme();

  return (
    <div className={`relative ${className}`}>
      <Image
        src={isDark ? "/logo_small_dark_mode.png" : "/logo_small_light_mode.png"}
        alt="Logo"
        width={width}
        height={height}
        className="transition-all duration-300 object-contain"
        priority
      />
    </div>
  );
};

export default ThemeLogo;