import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';

export default function BestTimeToVisit() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Best Time to Visit Desert National Park</h3>
        
        <ul className="space-y-6">
          {desertNationalParkInfo.bestTimeToVisit.map((season, index) => (
            <li key={index} className="text-gray-700">
              <h4 className="text-lg font-semibold mb-2">{season.title}</h4>
              <p className="leading-relaxed">{season.description}</p>
            </li>
          ))}
        </ul>
        
        <p className="mt-8 text-gray-700 leading-relaxed">
          {desertNationalParkInfo.conclusion}
        </p>
      </div>
    </section>
  );
}