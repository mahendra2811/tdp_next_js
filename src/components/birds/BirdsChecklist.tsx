import React from 'react';

interface BirdSpecies {
  species: string;
  season: string;
  status: string;
}

interface BirdsChecklistProps {
  birdsChecklist: BirdSpecies[];
  additionalBirdsChecklist?: BirdSpecies[];
}

export default function BirdsChecklist({ birdsChecklist, additionalBirdsChecklist }: BirdsChecklistProps) {
  // Combine both checklists if additionalBirdsChecklist is provided
  const allBirds = additionalBirdsChecklist 
    ? [...birdsChecklist, ...additionalBirdsChecklist]
    : birdsChecklist;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold text-center mb-6">CHECKLIST OF BIRDS</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Species</th>
              <th className="border border-gray-300 p-2 text-left">Season</th>
              <th className="border border-gray-300 p-2 text-left">Conservation Status</th>
            </tr>
          </thead>
          <tbody>
            {allBirds.map((bird, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="border border-gray-300 p-2">{bird.species}</td>
                <td className="border border-gray-300 p-2">{bird.season}</td>
                <td className="border border-gray-300 p-2">{bird.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}