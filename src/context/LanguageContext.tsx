"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the available languages
export type Language = 'en' | 'hi';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize state with default language (English)
  const [language, setLanguageState] = useState<Language>('en');
  
  // Load language preference from localStorage on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      // Only set if it's a valid language option
      if (savedLanguage === 'en' || savedLanguage === 'hi') {
        setLanguageState(savedLanguage);
      }
    }
  }, []);
  
  // Update localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      
      // Update HTML lang attribute for SEO
      document.documentElement.lang = lang === 'en' ? 'en' : 'hi';
      
      // Add hreflang meta tags for SEO
      const existingLink = document.querySelector('link[rel="alternate"][hreflang]');
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang === 'en' ? 'hi' : 'en';
        link.href = window.location.href;
        document.head.appendChild(link);
      }
    }
  };
  
  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};