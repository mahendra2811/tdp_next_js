import React from 'react';
import { desertNationalParkInfo } from '@/constant/desertNationalParkInfo';

export default function GoogleMap() {
  return (
    <section className="py-8 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe 
            src={desertNationalParkInfo.googleMapEmbed}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Desert National Park Location"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}