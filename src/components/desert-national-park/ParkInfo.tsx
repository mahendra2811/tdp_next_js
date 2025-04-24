import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';

export default function ParkInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Desert National Park</h2>
        
        <ul className="space-y-8">
          {desertNationalParkInfo.parkInfo.map((item, index) => (
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