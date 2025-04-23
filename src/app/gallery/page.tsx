import ImageGallery from "@/components/ImageGallery";

export default function Gallery() {
  const images = [
    { src: "https://thardesertphotography.com/gallery/IMG_5307-Edit.webp", alt: "Sunset Camel Ride" },
    { src: "https://thardesertphotography.com/gallery/IMG_3883.webp", alt: "Camels in Desert" },
    { src: "https://thardesertphotography.com/gallery/IMG_4762.webp", alt: "Camp Fire Night" },
    { src: "https://thardesertphotography.com/gallery/IMG_3763.webp", alt: "Dunes" },
    { src: "https://thardesertphotography.com/gallery/IMG_3989.webp", alt: "Nomad in Sand" },
    { src: "https://thardesertphotography.com/gallery/IMG_5456.webp", alt: "Golden Hour Jeep Safari" },
    { src: "https://thardesertphotography.com/gallery/IMG_5529.webp", alt: "Rajasthani Folk" },
    { src: "https://thardesertphotography.com/gallery/IMG_5499.webp", alt: "Desert Camp Tents" },
    // Add more photos below as needed.
  ];
  return (
    <section>
      <h1 className="text-2xl font-bold text-primary mb-5 text-center">Photo Gallery</h1>
      <ImageGallery images={images} />
      <div className="text-muted-foreground text-center text-xs mt-3">Tap on a photo to enlarge. Paste more images in the array above!</div>
    </section>
  );
}
