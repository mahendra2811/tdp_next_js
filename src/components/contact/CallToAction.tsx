import { contactInfo } from "@/constant/contactInfo";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Call To Action</p>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready For Unforgettable Travel. Remember Us!
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto mb-8">
          "Prepared to Immerse in Unforgettable Thar Desert Exploration with Sharvan Patel.
          Let Your Journey Echo Our Warmth and Expertise Forever."
        </p>
        
        <a 
          href={`tel:${contactInfo.phone}`}
          className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
        >
          Call Me!
        </a>
      </div>
    </section>
  );
}