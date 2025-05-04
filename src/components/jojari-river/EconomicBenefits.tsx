'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function EconomicBenefits() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  // Safely access economicBenefits, falling back to English if Hindi version doesn't have it
  const benefits = info.economicBenefits || jojariRiverInfo.economicBenefits;

  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          {language === 'en' ? 'Economic Benefits of Jojari River' : 'जोजारी नदी के आर्थिक लाभ'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Sector' : 'क्षेत्र'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Contribution Level' : 'योगदान स्तर'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Description' : 'विवरण'}
                </th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2 font-medium">{benefit.sector}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={
                        benefit.contribution === 'High' || benefit.contribution === 'उच्च'
                          ? 'text-green-600 font-medium'
                          : benefit.contribution === 'Medium' || benefit.contribution === 'मध्यम'
                          ? 'text-amber-600 font-medium'
                          : 'text-blue-600 font-medium'
                      }
                    >
                      {benefit.contribution}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{benefit.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            {language === 'en' ? 'Economic Importance' : 'आर्थिक महत्व'}
          </h4>
          <p className="text-gray-700 leading-relaxed">{info.riverInfo[3].description}</p>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Economic Benefits Visualization' : 'आर्थिक लाभ दृश्य'}
            </h4>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex flex-col space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-32 font-medium">{benefit.sector}</div>
                    <div className="flex-1">
                      <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            benefit.contribution === 'High' || benefit.contribution === 'उच्च'
                              ? 'bg-green-500'
                              : benefit.contribution === 'Medium' ||
                                benefit.contribution === 'मध्यम'
                              ? 'bg-amber-500'
                              : 'bg-blue-500'
                          }`}
                          style={{
                            width:
                              benefit.contribution === 'High' || benefit.contribution === 'उच्च'
                                ? '80%'
                                : benefit.contribution === 'Medium' ||
                                  benefit.contribution === 'मध्यम'
                                ? '50%'
                                : '25%',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      {benefit.contribution === 'High' || benefit.contribution === 'उच्च'
                        ? '80%'
                        : benefit.contribution === 'Medium' || benefit.contribution === 'मध्यम'
                        ? '50%'
                        : '25%'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
