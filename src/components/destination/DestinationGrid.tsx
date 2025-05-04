import DestinationCard from './DestinationCard';
import Link from 'next/link';

interface Destination {
  id: string;
  location: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  link?: string;
}

interface DestinationGridProps {
  destinations: Destination[];
  moreInfoLink: string;
}

export default function DestinationGrid({ destinations, moreInfoLink }: DestinationGridProps) {
  return (
    <section className="py-16" id="destination">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              location={destination.location}
              title={destination.title}
              description={destination.description}
              image={destination.image}
              rating={destination.rating}
              link={destination.link}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={moreInfoLink}
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
          >
            For more information
          </Link>
        </div>
      </div>
    </section>
  );
}
