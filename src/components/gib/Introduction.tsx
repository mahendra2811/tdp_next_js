import React from 'react';

interface IntroductionProps {
  content: string;
}

export default function Introduction({ content }: IntroductionProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <p 
        className="text-base md:text-lg text-center max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}