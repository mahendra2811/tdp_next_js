import React from 'react';

interface InfoSection {
  title: string;
  content: string;
}

interface ReptilesInfoProps {
  introText: string;
  infoSections: InfoSection[];
}

export default function ReptilesInfo({ introText, infoSections }: ReptilesInfoProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <p className="text-base md:text-lg mb-8">
        {introText}
      </p>

      <ul className="space-y-6">
        {infoSections.map((section, index) => (
          <li key={index} className="mb-4">
            <h3 className="font-bold text-lg md:text-xl mb-2">{section.title}</h3>
            <p className="text-base md:text-lg">{section.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}