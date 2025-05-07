import React from 'react';

interface WisdomItem {
  title: string;
  content: string;
}

interface BirdingWisdomProps {
  wisdomItems: WisdomItem[];
}

export default function BirdingWisdom({ wisdomItems }: BirdingWisdomProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <ul className="space-y-6">
        {wisdomItems.map((item, index) => (
          <li key={index} className="mb-4">
            <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
            <p className="text-base md:text-lg">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}