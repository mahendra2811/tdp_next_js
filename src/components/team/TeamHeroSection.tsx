import Link from "next/link";
import { teamIntro } from "@/constant/teamData";

interface TeamHeroSectionProps {
  backgroundImage?: string;
}

export default function TeamHeroSection({ 
  backgroundImage = "/assets/Images/team/banner.JPG" 
}: TeamHeroSectionProps) {
  return (
    <section 
      className="relative py-24 md:py-32 flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {teamIntro.title}
        </h1>
        
        <div className="flex justify-center gap-4 mt-8">
          <Link 
            href="/about"
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            About me
          </Link>
          
          <a 
            href="https://forms.gle/sBWPWkdsfHUVrkqD9" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-md transition-colors"
          >
            Book now
          </a>
        </div>
      </div>
    </section>
  );
}