import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

export default function Home() {
  // Dummy images for gallery preview
  const galleryImages = [
    { src: "https://thardesertphotography.com/gallery/IMG_3763.webp", alt: "Thar Desert Safari" },
    { src: "https://thardesertphotography.com/gallery/IMG_3883.webp", alt: "Camel Ride" },
    { src: "https://thardesertphotography.com/gallery/IMG_5307-Edit.webp", alt: "Sunset in the Desert" },
    { src: "https://thardesertphotography.com/gallery/IMG_4762.webp", alt: "Camp Night" },
  ];
  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="w-full min-h-[350px] flex flex-col justify-center items-center bg-cover bg-center rounded-xl mt-2 pb-4"
        style={{ backgroundImage: 'url(https://thardesertphotography.com/images/hero.jpg)' }}>
        <div className="bg-black/50 w-full h-full min-h-[350px] flex flex-col justify-center items-center rounded-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-12 drop-shadow mb-4 text-center">Thar Desert Photography</h1>
          <p className="text-white text-base sm:text-lg font-medium mb-6 text-center max-w-xs sm:max-w-md">Explore the magic of Rajasthan's desert through our lens. Camel safaris, camp nights, tours, and more!</p>
          <Link href="/contact" className="bg-primary text-primary-foreground rounded px-6 py-2 font-semibold">Book Now</Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mt-8 text-center">
        <h2 className="text-xl font-bold text-primary mb-1">About Us</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-2">Paste a short about section here to introduce yourself, your story, and your mission to site visitors.</p>
        <Link href="/about" className="text-primary font-semibold underline text-sm">Read more</Link>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-primary mb-3 text-center">Gallery</h2>
        <ImageGallery images={galleryImages} />
        <div className="text-center mt-2">
          <Link href="/gallery" className="text-primary font-semibold underline text-sm">See the full gallery</Link>
        </div>
      </section>

      {/* PRODUCTS (MINI E-COMMERCE) PREVIEW */}
      <section className="mt-8 text-center">
        <h2 className="text-xl font-bold text-primary mb-1">Our Tours & Products</h2>
        <p className="text-sm text-muted-foreground mb-2">Showcase your tour packages or products here. List 3-4 cards (see Products page for details).</p>
        <Link href="/products" className="text-primary font-semibold underline text-sm">Browse packages</Link>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="mt-8 text-center">
        <h2 className="text-xl font-bold text-primary mb-1">Ready for a Desert Adventure?</h2>
        <p className="text-sm text-muted-foreground mb-2">Invite users to contact you for bookings or custom tours.</p>
        <Link href="/contact" className="bg-primary text-primary-foreground rounded px-8 py-2 font-semibold">Contact Us</Link>
      </section>
    </div>
  );
}
