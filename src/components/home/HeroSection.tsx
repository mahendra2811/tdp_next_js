import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroSectionProps) {
  return (
    <section
      className="w-full min-h-[500px] flex flex-col justify-center items-center bg-cover bg-center bg-fixed mt-0 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        marginTop: '-4rem', // Use rem instead of pixels for better responsiveness
        paddingTop: '4rem', // Add padding to compensate for the negative margin
      }}
    >
      {/* Semi-transparent overlay for the entire section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30 pointer-events-none"></div>

      {/* Content container */}
      <div className="w-full h-full min-h-[500px] flex flex-col justify-center items-center px-4 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-12 drop-shadow mb-4 text-center">
          {title}
        </h2>
        <p className="text-white text-xl sm:text-2xl font-medium mb-6 text-center max-w-xl">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryButtonLink}
            className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonLink}
            className="bg-white hover:bg-gray-100 text-primary rounded-md px-6 py-3 font-semibold transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
