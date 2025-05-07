'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function PoliticalPromises() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  // Safely access politicalPromises, falling back to English if Hindi version doesn't have it
  const promises = info.politicalPromises || jojariRiverInfo.politicalPromises;

  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          {language === 'en'
            ? 'Political Promises and Implementation'
            : 'राजनीतिक वादे और कार्यान्वयन'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Year' : 'वर्ष'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Politician' : 'राजनेता'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Party' : 'पार्टी'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Promise' : 'वादा'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Implementation Status' : 'कार्यान्वयन स्थिति'}
                </th>
              </tr>
            </thead>
            <tbody>
              {promises.map((promise, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2">{promise.year}</td>
                  <td className="border border-gray-300 px-4 py-2">{promise.politician}</td>
                  <td className="border border-gray-300 px-4 py-2">{promise.party}</td>
                  <td className="border border-gray-300 px-4 py-2">{promise.promise}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={
                        promise.implementation.includes('Implemented') ||
                        promise.implementation.includes('लागू')
                          ? 'text-green-600 font-medium'
                          : promise.implementation.includes('Not') ||
                            promise.implementation.includes('नहीं')
                          ? 'text-red-600 font-medium'
                          : 'text-amber-600 font-medium'
                      }
                    >
                      {promise.implementation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            {language === 'en' ? 'Political History' : 'राजनीतिक इतिहास'}
          </h4>
          <p className="text-gray-700 leading-relaxed">{info.riverInfo[6].description}</p>
          <p className="text-gray-700 leading-relaxed mt-4">{info.riverInfo[7].description}</p>
        </div>
      </div>
    </section>
  );
}
