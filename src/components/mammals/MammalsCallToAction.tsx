import React from 'react';
import Link from 'next/link';

const MammalsCallToAction: React.FC = () => {
  return (
    <div className="bg-blue-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready For Unforgettable Desert Mammal Exploration!
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto mb-8">
          "Prepared to Immerse in Unforgettable Thar Desert Exploration with Sharvan Patel. Let Your Journey Echo Our Warmth and Expertise Forever."
        </p>
        <Link href="tel:+919929262986" className="inline-block bg-white text-blue-500 font-bold py-3 px-8 rounded-md hover:bg-blue-50 transition duration-300">
          Call Me Now!
        </Link>
      </div>
    </div>
  );
};

export default MammalsCallToAction;