'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function BestTimeToVisit() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">
          {language === 'en'
            ? 'Best Time to Visit Jojari River'
            : 'जोजारी नदी घूमने का सबसे अच्छा समय'}
        </h3>

        <ul className="space-y-6">
          {info.bestTimeToVisit.map((season, index) => (
            <li key={index} className="text-gray-700">
              <h4 className="text-lg font-semibold mb-2">{season.title}</h4>
              <p className="leading-relaxed">{season.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-gray-700 leading-relaxed">{info.conclusion}</p>
      </div>
    </section>
  );
}
