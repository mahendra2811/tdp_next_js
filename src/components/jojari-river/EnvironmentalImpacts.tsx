'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function EnvironmentalImpacts() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  // Safely access environmentalImpacts, falling back to English if Hindi version doesn't have it
  const impacts = info.environmentalImpacts || jojariRiverInfo.environmentalImpacts;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          {language === 'en'
            ? 'Environmental Impacts and Challenges'
            : 'पर्यावरणीय प्रभाव और चुनौतियां'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Impact' : 'प्रभाव'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Severity' : 'गंभीरता'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Affected Areas' : 'प्रभावित क्षेत्र'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Description' : 'विवरण'}
                </th>
              </tr>
            </thead>
            <tbody>
              {impacts.map((impact, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2 font-medium">{impact.impact}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={
                        impact.severity === 'High' || impact.severity === 'उच्च'
                          ? 'text-red-600 font-medium'
                          : impact.severity === 'Medium' || impact.severity === 'मध्यम'
                          ? 'text-amber-600 font-medium'
                          : 'text-green-600 font-medium'
                      }
                    >
                      {impact.severity}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{impact.affectedAreas}</td>
                  <td className="border border-gray-300 px-4 py-2">{impact.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            {language === 'en' ? 'Current Challenges' : 'वर्तमान चुनौतियां'}
          </h4>
          <p className="text-gray-700 leading-relaxed">{info.riverInfo[5].description}</p>
        </div>
      </div>
    </section>
  );
}
