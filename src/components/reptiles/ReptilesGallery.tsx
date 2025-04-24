import React from 'react';
import ImageGallery, { GalleryImage } from '@/components/ImageGallery';
import Link from 'next/link';

interface ReptilesGalleryProps {
  title?: string;
  galleryImages: GalleryImage[];
  showViewMoreButton?: boolean;
}

export default function ReptilesGallery({ 
  title, 
  galleryImages, 
  showViewMoreButton = false 
}: ReptilesGalleryProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {title && (
        <p className="text-sm uppercase tracking-wider text-primary font-medium mb-6 text-center">
          {title}
        </p>
      )}
      
      <ImageGallery images={galleryImages} />
      
      {showViewMoreButton && (
        <div className="mt-10 text-center">
          <Link href="/gallery">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-4 px-10 rounded-md transition-colors text-lg shadow-lg animate-pulse hover:animate-none">
              View More Photos
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}