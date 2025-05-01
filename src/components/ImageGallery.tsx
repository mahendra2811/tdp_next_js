"use client";
import Image from "next/image";
import React, { useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<null | number>(null);

  return (
    <div>
      {/* Responsive grid gallery */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {images.map((img, idx) => (
          <button key={idx} className="focus:outline-none" onClick={() => { setOpen(true); setActive(idx); }}>
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={200}
              className="w-full h-32 object-cover rounded-md hover:scale-105 transition-all"
            />
          </button>
        ))}
      </div>

      {/* Modal/lightbox */}
      {open && active !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setOpen(false)}>
          <img src={images[active].src} alt={images[active].alt} className="max-w-full max-h-[80vh] rounded shadow-lg" />
        </div>
      )}
    </div>
  );
}
