'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function Gallery() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  // Display images in groups of 5 for better organization
  const displayImages = (startIndex: number, count: number) => {
    return info.galleryImages.slice(startIndex, startIndex + count).map((image, index) => (
      <li key={`${startIndex}-${index}`} className="gallery-item">
        <figure className="relative h-64 w-full overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </figure>
      </li>
    ));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <p className="text-sm uppercase tracking-wider text-center text-gray-500 mb-2">
          {language === 'en' ? 'Image Gallery' : 'छवि गैलरी'}
        </p>
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === 'en'
            ? 'Jojari River through our lens'
            : 'हमारे लेंस के माध्यम से जोजारी नदी'}
        </h2>

        {/* First set of images */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {displayImages(0, 5)}
        </ul>

        {/* Second set of images */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {displayImages(5, 5)}
        </ul>

        <div className="text-center mt-20 mb-20 py-4">
          <Link href="/gallery">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-4 px-10 rounded-md transition-colors text-lg shadow-md">
              {language === 'en'
                ? 'View more photos from Jojari River'
                : 'जोजारी नदी से और अधिक तस्वीरें देखें'}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
