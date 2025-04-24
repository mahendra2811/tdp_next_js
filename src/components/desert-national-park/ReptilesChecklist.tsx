import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';

export default function ReptilesChecklist() {
  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">CHECKLIST OF REPTILES</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Name Of The Reptiles</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Scientific Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {desertNationalParkInfo.reptilesChecklist.map((reptile, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2">{reptile.name}</td>
                  <td className="border border-gray-300 px-4 py-2 italic">{reptile.scientificName}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className={
                      reptile.status.includes('Common') ? 'text-green-600 font-medium' : 
                      reptile.status.includes('Rare') ? 'text-red-600 font-medium' : 
                      'text-amber-600 font-medium'
                    }>
                      {reptile.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}