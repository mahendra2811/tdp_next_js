'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Define the types
interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySectionProps {
  subtitle: string;
  title: string;
  description: string;
  images: GalleryImage[];
  buttonText: string;
  buttonLink: string;
}

// Dynamically import the GallerySection component
const DynamicGallerySection = dynamic(
  () => import('./GallerySection'),
  {
    loading: () => <GallerySectionLoader />,
    ssr: false
  }
);

// Loading component for the gallery section
function GallerySectionLoader() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded max-w-3xl mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="h-10 bg-gray-200 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Lazy Gallery Section component
export default function LazyGallerySection(props: GallerySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    // Create an Intersection Observer to detect when the section is in viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasLoaded) {
        setIsVisible(true);
        setHasLoaded(true);
      }
    }, { rootMargin: '200px' }); // Load when within 200px of viewport
    
    // Get the current ref value
    const currentRef = document.getElementById('lazy-gallery-section');
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    // Clean up
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasLoaded]);
  
  return (
    <div id="lazy-gallery-section">
      {isVisible ? (
        <Suspense fallback={<GallerySectionLoader />}>
          <DynamicGallerySection {...props} />
        </Suspense>
      ) : (
        <GallerySectionLoader />
      )}
    </div>
  );
}