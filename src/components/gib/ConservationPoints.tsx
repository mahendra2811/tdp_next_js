import React from 'react';

interface ConservationPoint {
  title: string;
  description: string;
}

interface ConservationPointsProps {
  points: ConservationPoint[];
}

export default function ConservationPoints({ points }: ConservationPointsProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <ul className="space-y-8">
          {points.map((point, index) => (
            <li key={index} className="pb-6 border-b border-gray-200 last:border-0">
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <div className="text-gray-700">
                {point.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}