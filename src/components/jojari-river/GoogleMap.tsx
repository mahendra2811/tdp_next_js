'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { useLanguage } from '@/context/LanguageContext';

export default function GoogleMap() {
  const { language } = useLanguage();
  // We're only using the English version for the map embed since it's the same for both languages

  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          {language === 'en' ? 'Location Map' : 'स्थान मानचित्र'}
        </h3>
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src={jojariRiverInfo.googleMapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={language === 'en' ? 'Jojari River Location' : 'जोजारी नदी स्थान'}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
