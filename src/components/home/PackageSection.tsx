import Image from "next/image";
import Link from "next/link";

interface PackageProps {
  title: string;
  description: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  priceUnit: string;
  reviews: number;
  rating: number;
  link: string;
  buttonText: string;
  buttonLink: string;
}

interface PackageSectionProps {
  subtitle: string;
  title: string;
  packages: PackageProps[];
  viewAllButtonText: string;
  viewAllButtonLink: string;
}

export default function PackageSection({
  subtitle,
  title,
  packages,
  viewAllButtonText,
  viewAllButtonLink,
}: PackageSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-primary font-medium mb-2">{subtitle}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{title}</h2>

        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto mb-8">
            <div className="relative h-80 w-full">
              <Image 
                src={pkg.image} 
                alt={pkg.title} 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Link href={pkg.link}>
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">{pkg.title}</h3>
              </Link>
              <p className="text-gray-700 mb-6">
                {pkg.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <p>{pkg.duration}</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" clipRule="evenodd" />
                  </svg>
                  <Link href={pkg.link}>
                    <p className="hover:text-primary transition-colors">{pkg.location}</p>
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">({pkg.reviews} reviews)</p>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5" 
                          viewBox="0 0 20 20" 
                          fill={i < pkg.rating ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth={i < pkg.rating ? 0 : 1}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">{pkg.price} <span className="text-sm font-normal text-gray-500">{pkg.priceUnit}</span></p>
                  </div>
                </div>
                <p className="text-center mb-4">Want to know more about trip</p>
                <div className="text-center">
                  <Link href={pkg.buttonLink} target="_blank" className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors inline-block">
                    {pkg.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mt-10">
          <Link href={viewAllButtonLink} className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors">
            {viewAllButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}