import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: HeroSectionProps) {
  return (
    <section 
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container max-w-5xl mx-auto relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        
        {/* Buttons */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-wrap justify-center gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Link href={primaryButtonLink}>
                <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  {primaryButtonText}
                </button>
              </Link>
            )}
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <button className="bg-white hover:bg-gray-100 text-primary font-medium py-2 px-6 rounded-md transition-colors">
                  {secondaryButtonText}
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}