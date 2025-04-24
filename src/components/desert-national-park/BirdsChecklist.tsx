import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';

export default function BirdsChecklist() {
  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">CHECKLIST OF BIRDS</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Species</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {desertNationalParkInfo.birdsChecklist.map((bird, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2">{bird.species}</td>
                  <td className="border border-gray-300 px-4 py-2">{bird.location}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className={bird.status === 'Seen' ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                      {bird.status}
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