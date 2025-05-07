'use client';
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import useGalleryImage from '@/hooks/useGalleryImage';
import { useGallery } from '@/context/GalleryContext';

interface GalleryImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  forceGallery?: boolean;
  disableGallery?: boolean;
  galleryGroup?: string; // Optional group identifier for related images
}

export default function GalleryImage({
  src,
  alt,
  forceGallery = false,
  disableGallery = false,
  galleryGroup,
  className = '',
  ...props
}: GalleryImageProps) {
  const { shouldOpenInModal, image } = useGalleryImage(src, alt);
  const { openGallery } = useGallery();
  const [isLoaded, setIsLoaded] = useState(false);

  // Determine if this image should open in a modal
  const openInModal = (forceGallery || shouldOpenInModal) && !disableGallery;

  const handleImageClick = () => {
    if (openInModal) {
      // If this image is part of a gallery group, we could fetch all related images
      // For now, we'll just open this single image
      openGallery([image], 0);

      // Add analytics event for tracking (optional)
      // Commented out due to TypeScript errors - uncomment and add proper types if analytics are needed
      /*
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'view_image', {
          image_url: src,
          image_alt: alt,
        });
      }
      */
    }
  };

  return (
    <div
      className={`relative ${openInModal ? 'cursor-pointer group' : ''}`}
      onClick={handleImageClick}
      role={openInModal ? 'button' : undefined}
      aria-label={openInModal ? `View ${alt} in full size` : undefined}
    >
      {/* Show loading placeholder until image loads */}
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}

      {/* The actual image */}
      <Image
        src={src}
        alt={alt}
        className={`${className} ${
          openInModal ? 'hover:scale-105 transition-transform duration-300' : ''
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        {...props}
      />

      {/* Indicator for clickable gallery images */}
      {openInModal && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
