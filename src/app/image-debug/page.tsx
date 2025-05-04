"use client";
import React from 'react';
import GalleryImage from '@/components/common/GalleryImage';
import ImageGallery from '@/components/ImageGallery';
import { GalleryImage as GalleryImageType } from '@/components/common/ImageModal';

export default function ImageDebugPage() {
  // Sample gallery images
  const galleryImages: GalleryImageType[] = [
    {
      src: '/assets/Images/gallery/gallery-33.JPG',
      alt: 'Gallery image 33',
    },
    {
      src: '/assets/Images/gallery/gallery-34.JPG',
      alt: 'Gallery image 34',
    },
    {
      src: '/assets/Images/gallery/gallery-37.JPG',
      alt: 'Gallery image 37',
    },
    {
      src: '/assets/Images/gallery/gallery-39.JPG',
      alt: 'Gallery image 39',
    },
  ];

  // Sample non-gallery images (hero, banner, etc.)
  const nonGalleryImages = [
    {
      src: '/assets/Images/hero-banner-1.jpg',
      alt: 'Hero banner',
    },
    {
      src: '/assets/Images/Home/Banner.jpg',
      alt: 'Home banner',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Image Gallery Debug</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Individual Gallery Images (should open in modal)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square relative">
              <GalleryImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Non-Gallery Images (should not open in modal)</h2>
        <div className="grid grid-cols-2 gap-4">
          {nonGalleryImages.map((image, index) => (
            <div key={index} className="aspect-video relative">
              <GalleryImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Force Gallery on Non-Gallery Image</h2>
        <div className="aspect-video relative w-full max-w-md mx-auto">
          <GalleryImage
            src={nonGalleryImages[0].src}
            alt={nonGalleryImages[0].alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            forceGallery={true}
          />
          <p className="mt-2 text-center text-sm text-gray-500">
            This hero image is forced to open in gallery mode
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">ImageGallery Component Test</h2>
        <ImageGallery images={galleryImages} />
      </section>
    </div>
  );
}