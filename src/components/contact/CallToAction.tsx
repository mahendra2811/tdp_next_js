import { contactInfo } from "@/constant/contactInfo";

export default function CallToAction() {
  return (
    <section id="call-to-action" className="py-20 bg-gradient-to-r from-primary/90 to-primary text-white shadow-xl mt-16">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-wider mb-3 opacity-90">Call To Action</p>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready For Unforgettable Travel. Remember Us!
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto mb-10">
          "Prepared to Immerse in Unforgettable Thar Desert Exploration with Sharvan Patel.
          Let Your Journey Echo Our Warmth and Expertise Forever."
        </p>
        
        <a
          href={`tel:${contactInfo.phone}`}
          className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-4 px-10 rounded-md transition-colors text-lg shadow-md"
        >
          Call Me!
        </a>
      </div>
    </section>
  );
}