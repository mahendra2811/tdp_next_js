import { aboutInfo } from '@/constant/aboutInfo';
import Image from 'next/image';

export default function AboutSection() {
  // Function to return descriptive alt text for about page images
  const getAboutImageAlt = (index: number): string => {
    const altTexts = [
      'Sharvan Patel, a wildlife photographer from Doli village, capturing desert landscapes with his professional camera in the Thar Desert',
      'Sharvan Patel leading a conservation tour in Dhawa Doli Wildlife Sanctuary, explaining local ecosystem to visitors',
      'Sharvan Patel photographing birds in their natural habitat at Desert National Park, showcasing his wildlife photography expertise',
      'Sharvan Patel conducting a photography workshop for local youth, sharing his knowledge about desert conservation through visual storytelling',
      'Sharvan Patel documenting rare desert flora during the post-monsoon season, highlighting his commitment to biodiversity conservation',
      'Sharvan Patel receiving recognition for his conservation work at a regional environmental award ceremony',
      'Sharvan Patel collaborating with scientists to monitor wildlife populations in the Thar Desert region',
      'Sharvan Patel engaging with local community members to promote sustainable practices in villages surrounding wildlife sanctuaries',
      'Sharvan Patel photographing the Great Indian Bustard, contributing to awareness about this critically endangered species',
      'Sharvan Patel leading a desert expedition, showcasing his intimate knowledge of the Rajasthani landscape',
    ];

    return index < altTexts.length
      ? altTexts[index]
      : `Sharvan Patel's photography and conservation work in Rajasthan`;
  };
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <p className="text-sm uppercase tracking-wider text-primary text-center mb-2">
          {aboutInfo.sections[0].subtitle}
        </p>

        <h2 className="text-3xl font-bold text-center mb-4">{aboutInfo.sections[0].title}</h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          {aboutInfo.sections[0].description}
        </p>

        {/* Biography Sections */}
        <div className="space-y-8">
          {aboutInfo.biography.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{section.title}:</h3>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* First Gallery */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {aboutInfo.photoGalleries[0].images.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={image}
                  alt={getAboutImageAlt(index)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Gallery */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {aboutInfo.photoGalleries[1].images.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={image}
                  alt={getAboutImageAlt(index + 5)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">{aboutInfo.conclusion.title}</h2>
          <p className="text-gray-700 leading-relaxed">{aboutInfo.conclusion.content}</p>
        </div>
      </div>
    </section>
  );
}
