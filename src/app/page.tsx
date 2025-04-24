import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  // Gallery images for the main gallery
  const galleryImages = [
    { src: "/assets/Images/Home/gallery-1.JPG", alt: "Gallery image 1" },
    { src: "/assets/Images/Home/gallery-2.jpg", alt: "Gallery image 2" },
    { src: "/assets/Images/Home/gallery-3.JPG", alt: "Gallery image 3" },
    { src: "/assets/Images/Home/gallery-4.jpg", alt: "Gallery image 4" },
    { src: "/assets/Images/Home/gallery-5.jpg", alt: "Gallery image 5" },
    { src: "/assets/Images/Home/gallery-6.JPG", alt: "Gallery image 6" },
    { src: "/assets/Images/Home/gallery-7.JPG", alt: "Gallery image 7" },
    { src: "/assets/Images/Home/gallery-8.JPG", alt: "Gallery image 8" },
    { src: "/assets/Images/Home/gallery-9.JPG", alt: "Gallery image 9" },
    { src: "/assets/Images/Home/gallery-10.JPG", alt: "Gallery image 10" },
    { src: "/assets/Images/Home/gallery-11.JPG", alt: "Gallery image 11" },
    { src: "/assets/Images/Home/gallery-12.JPG", alt: "Gallery image 12" },
    { src: "/assets/Images/Home/gallery-13.JPG", alt: "Gallery image 13" },
    { src: "/assets/Images/Home/gallery-14.JPG", alt: "Gallery image 14" },
    { src: "/assets/Images/Home/gallery-15.JPG", alt: "Gallery image 15" },
  ];

  // Self gallery images
  const selfGalleryImages = [
    { src: "/assets/Images/Home/self-1.jpg", alt: "Sharvan Patel 1" },
    { src: "/assets/Images/Home/self-2.jpg", alt: "Sharvan Patel 2" },
    { src: "/assets/Images/Home/self-3.jpg", alt: "Sharvan Patel 3" },
    { src: "/assets/Images/Home/self-4.JPG", alt: "Sharvan Patel 4" },
    { src: "/assets/Images/Home/self-5.JPG", alt: "Sharvan Patel 5" },
  ];

  return (
    <div>
      {/* WhatsApp Float Icon */}
      <a 
        href="https://wa.me/919929262986?text=hello%Sharvan%20patel%20I%27m%20interested%20to%20visit%20Dhawa%20Doli%20wildlife%20santuary."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 animate-pulse"
        aria-label="Contact on WhatsApp"
      >
        <div className="bg-green-500 rounded-full p-3 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* HERO SECTION */}
      <section 
        className="w-full min-h-[500px] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/Images/Home/Banner.jpg)' }}
      >
        <div className="bg-black/50 w-full h-full min-h-[500px] flex flex-col justify-center items-center px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-12 drop-shadow mb-4 text-center">I'm Sharvan Patel</h2>
          <p className="text-white text-xl sm:text-2xl font-medium mb-6 text-center max-w-xl">
            Passionate about <strong>Nature</strong>, <strong>Culture</strong> and <strong>Heritage</strong>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
              About me
            </Link>
            <Link href="https://forms.gle/KX871rPaAT5FMqoS6" target="_blank" className="bg-white hover:bg-gray-100 text-primary rounded-md px-6 py-3 font-semibold transition-colors">
              Book now
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-primary font-medium mb-2">About me</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">From Rural Roots to Photographic Pursuits</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-center sm:text-left">
            A passionate photographer hailing from the remote village of Dhawa in the heart of Rajasthan. 
            With an unwavering love for nature, culture, and heritage, Sharvan's lens captures the essence of rural 
            Rajasthan in a way that transcends conventional boundaries. As a dedicated explorer, Sharvan has spent the 
            last three years immersed in the artistry of the Thar region, weaving visual tales that showcase the beauty 
            of the landscape and the richness of its cultural tapestry. Through his lens, he not only captures moments 
            but also advocates for the conservation of wildlife and the preservation of Rajasthan's unique heritage. 
            Join us on a visual odyssey as we delve into the world of Sharvan Patel's photography, where every image 
            narrates a story of its own, embracing the spirit of Rajasthan with authenticity and passion.
          </p>
          <div className="text-center">
            <Link href="/about" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
              View more
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-primary font-medium mb-2">Uncover place</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Popular destination</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Uncover Hidden Gems: Sharvan's Lens Reveals the Beauty of Rajasthan's Best-Kept Secrets, from Ancient Forts
            to Enchanting Desert Landscapes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Destination 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full">
                <Image 
                  src="/assets/Images/Home/PD-1.jpg" 
                  alt="Dhawa-Doli wildlife Santuary" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex text-yellow-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">Jodhpur</p>
                <h3 className="text-xl font-bold mb-2">
                  <Link href="/Dhawa" className="text-gray-900 hover:text-primary transition-colors">
                    Dhawa-Doli wildlife Santuary
                  </Link>
                </h3>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full">
                <Image 
                  src="/assets/Images/Home/PD-2.jpg" 
                  alt="Desert National Park" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex text-yellow-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">Jaisalmer</p>
                <h3 className="text-xl font-bold mb-2">
                  <Link href="/DNP" className="text-gray-900 hover:text-primary transition-colors">
                    Desert National Park
                  </Link>
                </h3>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full">
                <Image 
                  src="/assets/Images/Home/PD-3.jpeg" 
                  alt="Mehrangarh fort" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex text-yellow-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">Jodhpur</p>
                <h3 className="text-xl font-bold mb-2">
                  <Link href="#" className="text-gray-900 hover:text-primary transition-colors">
                    Mehrangarh fort
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/Destination" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
              More destinations
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-primary font-medium mb-2">Popular Packages</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Checkout Our Packages</h2>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="relative h-80 w-full">
              <Image 
                src="/assets/Images/Home/Packages-1.jpg" 
                alt="Dhawa-Doli wildlife photo" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Link href="/DNP">
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">Dhawa-Doli wildlife Sanctuary</h3>
              </Link>
              <p className="text-gray-700 mb-6">
                Discover the pristine allure of Dhawa Doli Wildlife Sanctuary, where nature's symphony unfolds
                amidst breathtaking landscapes. Immerse yourself in the sanctuary's rich biodiversity, a testament
                to conservation efforts championed by Sharvan Patel.
              </p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <p>1 Day</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" clipRule="evenodd" />
                  </svg>
                  <Link href="/DNP">
                    <p className="hover:text-primary transition-colors">Jodhpur (Rajasthan)</p>
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">(21 reviews)</p>
                    <div className="flex text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">₹ 6000 <span className="text-sm font-normal text-gray-500">/ per Safari</span></p>
                  </div>
                </div>
                <p className="text-center mb-4">Want to know more about trip</p>
                <div className="text-center">
                  <Link href="https://forms.gle/KX871rPaAT5FMqoS6" target="_blank" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors inline-block">
                    Click here
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="#" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* FACEBOOK VIDEO SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="aspect-video w-full">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FqfuemHlh5n%2F&show_text=false"
                style={{border: 'none', overflow: 'hidden'}}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GALLERY SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-primary font-medium mb-2">Photo Gallery</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Captured Through Sharvan's Lens</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Explore the vibrant tapestry of Rajasthan's landscapes and culture in our Gallery, where every image is a
            moment captured through Sharvan's lens, unveiling the beauty and authenticity of the Thar Desert.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {galleryImages.slice(0, 15).map((img, idx) => (
              <div key={idx} className="relative h-48 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      {/* SELF GALLERY SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-primary font-medium mb-2">Photo Gallery</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4"></h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Journey through the lens of Sharvan Patel: A Visual Chronicle of His Exploration in Every Frame.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {selfGalleryImages.map((img, idx) => (
              <div key={idx} className="relative h-48 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/about" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
              View all Photos
            </Link>
          </div>
        </div>
      </section>

      {/* YOUTUBE SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Connect with Us on Youtube</h2>
          
          <div className="aspect-video w-full">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=UUQHs4JR3eMUQiVHUMD-DCEQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-medium mb-2">Call To Action</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready For Unforgettable Travel. Remember Us!</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Prepared to Immerse in Unforgettable Thar Desert Exploration with Sharvan Patel.
            Let Your Journey Echo Our Warmth and Expertise Forever.
          </p>
          <a
            href="tel:+919929262986"
            className="bg-white text-primary hover:bg-gray-100 rounded-md px-6 py-3 font-semibold transition-colors inline-block"
          >
            Call Me!
          </a>
        </div>
      </section>
    </div>
  );
}
