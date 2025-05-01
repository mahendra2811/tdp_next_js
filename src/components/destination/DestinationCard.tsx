import Image from 'next/image';
import Link from 'next/link';

interface DestinationCardProps {
  id: string;
  location: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  link?: string; // Optional link to the destination page
}

export default function DestinationCard({
  id,
  location,
  title,
  description,
  image,
  rating,
  link
}: DestinationCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      
      <div className="p-4">
        {/* Rating Stars */}
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill={i < rating ? "currentColor" : "none"} 
              stroke="currentColor"
              className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={i < rating ? 0 : 1.5} 
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
              />
            </svg>
          ))}
        </div>
        
        {/* Location */}
        <p className="text-sm text-primary font-medium mb-1">
          <Link href={link || `#${id}`} className="hover:underline">
            {location}
          </Link>
        </p>
        
        {/* Title */}
        <h3 className="text-lg font-bold mb-2">
          <Link href={link || `#${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}