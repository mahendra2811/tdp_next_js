import React from 'react';

interface MammalsInfoProps {
  introText: string;
  infoSections: {
    title: string;
    content: string;
  }[];
  conclusion: string;
}

const MammalsInfo: React.FC<MammalsInfoProps> = ({ introText, infoSections, conclusion }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8">
          {introText}
        </p>
        
        <div className="space-y-8">
          {infoSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
              <p className="text-gray-700">{section.content}</p>
            </div>
          ))}
        </div>
        
        <p className="text-lg mt-8">
          {conclusion}
        </p>
      </div>
    </div>
  );
};

export default MammalsInfo;