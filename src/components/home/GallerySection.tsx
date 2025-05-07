import Image from "next/image";
import Link from "next/link";

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

export default function GallerySection({
  subtitle,
  title,
  description,
  images,
  buttonText,
  buttonLink,
}: GallerySectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-primary font-medium mb-2">{subtitle}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          {description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href={buttonLink} 
            className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}