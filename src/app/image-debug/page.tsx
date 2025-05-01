"use client";
import { useEffect, useState } from 'react';
import { galleryInfo } from "@/constant/galleryInfo";
import Image from 'next/image';

export default function ImageDebugPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Image Debug Page</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hero Image</h2>
        <div className="p-4 border rounded mb-2">
          <p className="font-mono text-sm mb-2">{galleryInfo.heroImage}</p>
          <div className="relative h-40 w-full">
            <Image 
              src={galleryInfo.heroImage} 
              alt="Hero"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = 'red';
                target.style.opacity = '0.3';
              }}
            />
          </div>
        </div>
      </div>
      
      {galleryInfo.sections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.images.map((image, index) => (
              <div key={index} className="p-4 border rounded">
                <p className="font-mono text-sm mb-2">{image.src}</p>
                <div className="relative h-40 w-full">
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = 'red';
                      target.style.opacity = '0.3';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 p-4 bg-yellow-100 rounded">
        <h3 className="font-bold mb-2">Debugging Notes:</h3>
        <ul className="list-disc pl-5">
          <li>Red backgrounds indicate images that failed to load</li>
          <li>Check for case sensitivity issues (.jpg vs .JPG)</li>
          <li>Check for path issues (other- vs others-)</li>
          <li>Check if the file exists in the correct directory</li>
        </ul>
      </div>
    </main>
  );
}