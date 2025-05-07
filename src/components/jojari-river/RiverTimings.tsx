'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function RiverTimings() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          {language === 'en' ? 'Jojari River Seasonal Flow' : 'जोजारी नदी मौसमी प्रवाह'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Season' : 'मौसम'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Water Flow' : 'जल प्रवाह'}
                </th>
              </tr>
            </thead>
            <tbody>
              {info.riverTimings.map((timing, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2">{timing.season}</td>
                  <td className="border border-gray-300 px-4 py-2">{timing.waterFlow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
