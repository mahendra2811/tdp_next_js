"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import ImageModal, { GalleryImage } from '@/components/common/ImageModal';

interface GalleryContextType {
  openGallery: (images: GalleryImage[], startIndex?: number) => void;
  closeGallery: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

interface GalleryProviderProps {
  children: ReactNode;
}

export function GalleryProvider({ children }: GalleryProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = useCallback((images: GalleryImage[], startIndex = 0) => {
    setGalleryImages(images);
    setCurrentIndex(startIndex);
    setIsOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <GalleryContext.Provider value={{ openGallery, closeGallery }}>
      {children}
      
      {/* Global modal instance */}
      <ImageModal
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeGallery}
      />
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  
  return context;
}