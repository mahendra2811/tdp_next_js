import React from 'react';
import ImageGallery, { GalleryImage } from '@/components/ImageGallery';
import Link from 'next/link';

interface BirdsGalleryProps {
  title?: string;
  galleryImages: GalleryImage[];
  showViewMoreButton?: boolean;
}

export default function BirdsGallery({ 
  title, 
  galleryImages, 
  showViewMoreButton = false 
}: BirdsGalleryProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {title && (
        <p className="text-sm uppercase tracking-wider text-primary font-medium mb-6 text-center">
          {title}
        </p>
      )}
      
      <ImageGallery images={galleryImages} />
      
      {showViewMoreButton && (
        <div className="mt-8 text-center">
          <Link href="/gallery">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md transition-colors">
              View More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}