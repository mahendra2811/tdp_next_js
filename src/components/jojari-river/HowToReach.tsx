'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function HowToReach() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;
  const { howToReach } = info;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          {language === 'en' ? 'How to Reach Jojari River' : 'जोजारी नदी तक कैसे पहुंचें'}
        </h3>

        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">{howToReach.intro}</p>

          <p className="leading-relaxed">
            <strong className="font-semibold">
              {language === 'en' ? 'By Air:' : 'हवाई मार्ग से:'}
            </strong>{' '}
            {howToReach.byAir}
          </p>

          <p className="leading-relaxed">
            <strong className="font-semibold">
              {language === 'en' ? 'By Train:' : 'रेल मार्ग से:'}
            </strong>{' '}
            {howToReach.byTrain}
          </p>

          <p className="leading-relaxed">
            <strong className="font-semibold">
              {language === 'en' ? 'By Road:' : 'सड़क मार्ग से:'}
            </strong>{' '}
            {howToReach.byRoad}
          </p>

          <p className="leading-relaxed mt-4">{howToReach.conclusion}</p>
        </div>
      </div>
    </section>
  );
}
