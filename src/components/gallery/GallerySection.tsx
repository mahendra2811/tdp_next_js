'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import ImageModal, { GalleryImage } from '../common/ImageModal';
import { getHighQualityImagePath } from '@/lib/utils';

interface GallerySectionProps {
  title: string;
  description: string;
  images: GalleryImage[];
  id?: string;
}

export default function GallerySection({ title, description, images, id }: GallerySectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section id={id} className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>

        <p className="text-base md:text-lg text-center max-w-4xl mx-auto mb-10">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {enhancedImages.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
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
    </section>
  );
}
