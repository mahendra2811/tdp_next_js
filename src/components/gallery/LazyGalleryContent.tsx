'use client';

import React from 'react';
import GallerySection from '@/components/gallery/GallerySection';

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
}
export interface GalleryContent {
  sections: GallerySection[];
  title?: string;
  subtitle?: string;
  heroImage?: string;
  contactButtonText?: string;
  contactButtonLink?: string;
  bookButtonText?: string;
  bookButtonLink?: string;
  // Add other known properties as needed
}

interface LazyGalleryContentProps {
  content: GalleryContent;
}

export default function LazyGalleryContent({ content }: LazyGalleryContentProps) {
  return (
    <>
      {/* Gallery Sections */}
      {content.sections.map((section) => (
        <GallerySection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          images={section.images}
        />
      ))}
    </>
  );
}
