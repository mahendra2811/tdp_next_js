import { aboutInfo } from "@/constant/aboutInfo";

export default function AboutCallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-wider mb-2 opacity-90">
          {aboutInfo.callToAction.subtitle}
        </p>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {aboutInfo.callToAction.title}
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto mb-8">
          {aboutInfo.callToAction.description}
        </p>
        
        <a 
          href={aboutInfo.callToAction.buttonLink}
          className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
        >
          {aboutInfo.callToAction.buttonText}
        </a>
      </div>
    </section>
  );
}