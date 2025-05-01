"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center justify-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100 ${className}`}
      aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <span className={`${language === 'en' ? 'font-bold' : 'opacity-60'} mr-1`}>EN</span>
      <span className="mx-1 text-gray-400">|</span>
      <span className={`${language === 'hi' ? 'font-bold' : 'opacity-60'} ml-1`}>हिं</span>
    </button>
  );
};

export default LanguageToggle;