import Image from "next/image";
import Link from "next/link";

interface Destination {
  id: string;
  location: string;
  title: string;
  image: string;
  rating: number;
  link?: string;
}

interface PopularDestinationsProps {
  subtitle: string;
  title: string;
  description: string;
  destinations: Destination[];
  buttonText: string;
  buttonLink: string;
}

export default function PopularDestinations({
  subtitle,
  title,
  description,
  destinations,
  buttonText,
  buttonLink,
}: PopularDestinationsProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-primary font-medium mb-2">{subtitle}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full">
                <Image 
                  src={destination.image} 
                  alt={destination.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill={i < destination.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth={i < destination.rating ? 0 : 1}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-2">{destination.location}</p>
                <h3 className="text-xl font-bold mb-2">
                  <Link href={destination.link || `#${destination.id}`} className="text-gray-900 hover:text-primary transition-colors">
                    {destination.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href={buttonLink} className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}