'use client';
import { contactInfo } from '@/constant/contactInfo';
import { contactInfoHindi } from '@/constant/contactInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function TeamCallToAction() {
  const { language } = useLanguage();

  // Select content based on language
  const currentContactInfo = language === 'en' ? contactInfo : contactInfoHindi;
  return (
    <section className="py-20 bg-blue-600 text-white shadow-xl mt-16">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-wider mb-3 opacity-90">
          {language === 'en' ? 'Call To Action' : 'कॉल टू एक्शन'}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {language === 'en'
            ? 'Ready For Unforgettable Travel. Remember Us!'
            : 'अविस्मरणीय यात्रा के लिए तैयार। हमें याद रखें!'}
        </h2>

        <p className="text-lg max-w-2xl mx-auto mb-10">
          {language === 'en'
            ? '"Prepared to Immerse in Unforgettable Thar Desert Exploration with Sharvan Patel. Let Your Journey Echo Our Warmth and Expertise Forever."'
            : '"शरवन पटेल के साथ अविस्मरणीय थार रेगिस्तान की खोज में डूबने के लिए तैयार। आपकी यात्रा हमारी गर्मजोशी और विशेषज्ञता को हमेशा के लिए गूंजने दें।"'}
        </p>

        <a
          href={`tel:${currentContactInfo.phone}`}
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium py-4 px-10 rounded-md transition-colors text-lg shadow-md"
        >
          {language === 'en' ? 'Call Me!' : 'मुझे कॉल करें!'}
        </a>
      </div>
    </section>
  );
}
