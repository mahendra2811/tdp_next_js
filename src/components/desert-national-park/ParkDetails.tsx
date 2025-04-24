import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';

export default function ParkDetails() {
  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">Park Details</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Information</th>
              </tr>
            </thead>
            <tbody>
              {desertNationalParkInfo.parkDetails.map((detail, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2 font-medium">{detail.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{detail.information}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}