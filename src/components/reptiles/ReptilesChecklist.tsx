import React from 'react';

interface ReptileSpecies {
  species: string;
  scientificName: string;
  status: string;
}

interface ReptilesChecklistProps {
  reptilesChecklist: ReptileSpecies[];
}

export default function ReptilesChecklist({ reptilesChecklist }: ReptilesChecklistProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold text-center mb-6">CHECKLIST OF REPTILES</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Name Of The Reptiles</th>
              <th className="border border-gray-300 p-2 text-left">Scientific Name</th>
              <th className="border border-gray-300 p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reptilesChecklist.map((reptile, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="border border-gray-300 p-2">{reptile.species}</td>
                <td className="border border-gray-300 p-2">{reptile.scientificName}</td>
                <td className="border border-gray-300 p-2">{reptile.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}