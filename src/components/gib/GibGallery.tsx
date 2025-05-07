"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type GalleryImage = {
  src: string;
  alt: string;
};

interface GibGalleryProps {
  images: GalleryImage[];
  viewMoreLink?: string;
  viewMoreText?: string;
}

export default function GibGallery({ images, viewMoreLink, viewMoreText }: GibGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <li key={index} className="gallery-item">
              <figure 
                className="relative h-48 w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </figure>
            </li>
          ))}
        </ul>
        
        {viewMoreLink && viewMoreText && (
          <div className="mt-8 text-center">
            <Link href={viewMoreLink}>
              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors">
                {viewMoreText}
              </button>
            </Link>
          </div>
        )}
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}