import React from 'react';

interface WisdomItem {
  title: string;
  content: string;
}

interface MammalsWisdomProps {
  wisdomItems: WisdomItem[];
}

const MammalsWisdom: React.FC<MammalsWisdomProps> = ({ wisdomItems }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">MAMMAL WISDOM</h2>
        
        <div className="space-y-8">
          {wisdomItems.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MammalsWisdom;