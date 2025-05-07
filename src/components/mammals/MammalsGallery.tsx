import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryImage {
  src: string;
  alt: string;
}

interface MammalsGalleryProps {
  title?: string;
  galleryImages: GalleryImage[];
  showViewMoreButton?: boolean;
}

const MammalsGallery: React.FC<MammalsGalleryProps> = ({ 
  title = "Mammals photo's from Sharvan's lens",
  galleryImages, 
  showViewMoreButton = false 
}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        {showViewMoreButton && (
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
              View More Photos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MammalsGallery;