import React from 'react';

interface MammalSpecies {
  species: string;
  scientificName: string;
  status: string;
}

interface MammalsChecklistProps {
  mammalsChecklist: MammalSpecies[];
}

const MammalsChecklist: React.FC<MammalsChecklistProps> = ({ mammalsChecklist }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">CHECKLIST OF MAMMALS</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left font-semibold border-b">Species</th>
                <th className="py-3 px-4 text-left font-semibold border-b">Scientific Name</th>
                <th className="py-3 px-4 text-left font-semibold border-b">Conservation Status</th>
              </tr>
            </thead>
            <tbody>
              {mammalsChecklist.map((mammal, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-3 px-4 border-b">{mammal.species}</td>
                  <td className="py-3 px-4 border-b italic">{mammal.scientificName}</td>
                  <td className="py-3 px-4 border-b">{mammal.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MammalsChecklist;