'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import '@/styles/languageToggle.css';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat  justify-center "
          type="checkbox"
          checked={language === 'hi'}
          onChange={toggleLanguage}
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">हिंदी</span>
        <span className="off">Eng.</span>
      </div>
    </div>
  );
};

export default LanguageToggle;
