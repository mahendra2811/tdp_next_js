'use client';
import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';
import { desertNationalParkInfoHindi } from '@/constant/desertNationalParkInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function ParkInfo() {
  const { language } = useLanguage();
  const info = language === 'en' ? desertNationalParkInfo : desertNationalParkInfoHindi;
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{info.title}</h2>

        <ul className="space-y-8">
          {info.parkInfo.map((item, index) => (
            <li key={index} className="text-gray-700">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
