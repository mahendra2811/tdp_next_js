'use client';
import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import ImageModal, { GalleryImage } from './common/ImageModal';
import { getHighQualityImagePath } from '@/lib/utils';

export { type GalleryImage } from './common/ImageModal';

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4 | 5;
  gap?: 2 | 3 | 4 | 5;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
}

export default function ImageGallery({
  images,
  columns = 4,
  gap = 3,
  aspectRatio = 'square',
}: ImageGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Enhance images with high-quality sources
  const enhancedImages = useMemo(() => {
    return images.map((img) => ({
      ...img,
      highQualitySrc: getHighQualityImagePath(img.src),
    }));
  }, [images]);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageLoaded = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  // Determine height class based on aspect ratio
  const heightClass = useMemo(() => {
    switch (aspectRatio) {
      case 'landscape':
        return 'h-24 sm:h-32 md:h-40';
      case 'portrait':
        return 'h-40 sm:h-48 md:h-56';
      case 'square':
      default:
        return 'h-32 sm:h-40 md:h-48';
    }
  }, [aspectRatio]);

  // Determine grid columns class
  const columnsClass = useMemo(() => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3';
      case 5:
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
      case 4:
      default:
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
    }
  }, [columns]);

  // Determine gap class
  const gapClass = useMemo(() => {
    switch (gap) {
      case 2:
        return 'gap-2';
      case 4:
        return 'gap-4';
      case 5:
        return 'gap-5';
      case 3:
      default:
        return 'gap-3';
    }
  }, [gap]);

  return (
    <div>
      {/* Responsive grid gallery */}
      <div className={`grid ${gapClass} ${columnsClass}`}>
        {enhancedImages.map((img, idx) => (
          <button
            key={idx}
            className="focus:outline-none group"
            onClick={() => handleImageClick(idx)}
            aria-label={`View ${img.alt}`}
          >
            <div
              className={`relative w-full ${heightClass} overflow-hidden rounded-md bg-gray-200`}
            >
              {/* Loading placeholder */}
              {!loadedImages.has(idx) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}

              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={`(max-width: 640px) ${columns > 2 ? '50vw' : '100vw'}, (max-width: 768px) ${
                  columns > 3 ? '33vw' : '50vw'
                }, ${100 / columns}vw`}
                className={`object-cover transition-all duration-300 ${
                  loadedImages.has(idx) ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-105`}
                loading="lazy"
                onLoad={() => handleImageLoaded(idx)}
              />

              {/* Zoom indicator */}
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
            </div>
          </button>
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        images={enhancedImages}
        currentIndex={activeIndex}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
