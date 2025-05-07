import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';

export default function HowToReach() {
  const { howToReach } = desertNationalParkInfo;
  
  return (
    <section className="py-8 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">How to Reach Desert National Parks</h3>
        
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">{howToReach.intro}</p>
          
          <p className="leading-relaxed">
            <strong className="font-semibold">By Air:</strong> {howToReach.byAir}
          </p>
          
          <p className="leading-relaxed">
            <strong className="font-semibold">By Train:</strong> {howToReach.byTrain}
          </p>
          
          <p className="leading-relaxed">
            <strong className="font-semibold">By Road:</strong> {howToReach.byRoad}
          </p>
          
          <p className="leading-relaxed mt-4">{howToReach.conclusion}</p>
        </div>
      </div>
    </section>
  );
}