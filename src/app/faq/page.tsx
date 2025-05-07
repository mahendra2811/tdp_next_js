'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import HeroWithHeader from '@/components/common/HeroWithHeader';
import { Accordion } from '@/components/ui/Accordion';

export default function FAQPage() {
  const { language } = useLanguage();
  
  const title = language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न';
  const subtitle = language === 'en' 
    ? 'Find answers to common questions about our services' 
    : 'हमारी सेवाओं के बारे में सामान्य प्रश्नों के उत्तर खोजें';
  
  const faqItems = language === 'en' ? [
    {
      title: 'What services does Thar Desert Photography offer?',
      content: (
        <p>
          Thar Desert Photography offers wildlife photography tours, guided tours of wildlife sanctuaries and national parks in the Thar Desert region, photography workshops, and custom photography experiences.
        </p>
      ),
    },
    {
      title: 'How can I book a tour with Thar Desert Photography?',
      content: (
        <p>
          You can book a tour by contacting us through our website's contact form, calling us at +91 9929262986, or sending an email to sharvan.patel92@gmail.com.
        </p>
      ),
    },
    {
      title: 'What is the best time to visit the Thar Desert for wildlife photography?',
      content: (
        <p>
          The best time for wildlife photography in the Thar Desert is from October to March when the weather is pleasant and many migratory birds visit the region.
        </p>
      ),
    },
    {
      title: 'Are your tours suitable for beginners?',
      content: (
        <p>
          Yes, our tours are designed for photography enthusiasts of all skill levels, from beginners to professionals.
        </p>
      ),
    },
    {
      title: 'What wildlife can I expect to see during the tours?',
      content: (
        <p>
          The Thar Desert is home to diverse wildlife including various bird species (like the Great Indian Bustard), mammals like blackbuck and chinkara, and reptiles such as monitor lizards and various snake species.
        </p>
      ),
    }
  ] : [
    {
      title: 'थार डेजर्ट फोटोग्राफी क्या सेवाएं प्रदान करती है?',
      content: (
        <p>
          थार डेजर्ट फोटोग्राफी वन्यजीव फोटोग्राफी टूर, थार रेगिस्तान क्षेत्र में वन्यजीव अभयारण्यों और राष्ट्रीय उद्यानों के गाइडेड टूर, फोटोग्राफी वर्कशॉप और कस्टम फोटोग्राफी अनुभव प्रदान करती है।
        </p>
      ),
    },
    {
      title: 'मैं थार डेजर्ट फोटोग्राफी के साथ टूर कैसे बुक कर सकता हूं?',
      content: (
        <p>
          आप हमारी वेबसाइट के संपर्क फॉर्म के माध्यम से, +91 9929262986 पर कॉल करके, या sharvan.patel92@gmail.com पर ईमेल भेजकर टूर बुक कर सकते हैं।
        </p>
      ),
    },
    {
      title: 'वन्यजीव फोटोग्राफी के लिए थार रेगिस्तान जाने का सबसे अच्छा समय क्या है?',
      content: (
        <p>
          थार रेगिस्तान में वन्यजीव फोटोग्राफी के लिए सबसे अच्छा समय अक्टूबर से मार्च तक है जब मौसम सुहावना होता है और कई प्रवासी पक्षी इस क्षेत्र में आते हैं।
        </p>
      ),
    },
    {
      title: 'क्या आपके टूर शुरुआती लोगों के लिए उपयुक्त हैं?',
      content: (
        <p>
          हां, हमारे टूर सभी कौशल स्तरों के फोटोग्राफी उत्साही लोगों के लिए डिज़ाइन किए गए हैं, शुरुआती से लेकर पेशेवरों तक।
        </p>
      ),
    },
    {
      title: 'टूर के दौरान मुझे किस वन्यजीव को देखने की उम्मीद कर सकता हूं?',
      content: (
        <p>
          थार रेगिस्तान विविध वन्यजीवों का घर है, जिसमें विभिन्न पक्षी प्रजातियां (जैसे ग्रेट इंडियन बस्टर्ड), ब्लैकबक और चिंकारा जैसे स्तनधारी, और मॉनिटर छिपकली और विभिन्न सांप प्रजातियों जैसे सरीसृप शामिल हैं।
        </p>
      ),
    }
  ];
  
  return (
    <main>
      <div className="min-h-screen">
        {/* Hero Section with Header */}
        <HeroWithHeader
          title={title}
          subtitle={subtitle}
          backgroundImage="/assets/Images/contact/banner.JPG"
        />

        {/* FAQ Content */}
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </h2>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Find answers to common questions about our photography tours and services. If you don\'t see your question here, please contact us directly.'
                : 'हमारे फोटोग्राफी टूर और सेवाओं के बारे में सामान्य प्रश्नों के उत्तर खोजें। यदि आपका प्रश्न यहां नहीं है, तो कृपया हमसे सीधे संपर्क करें।'}
            </p>
          </div>
          
          <Accordion items={faqItems} />
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Still have questions?' : 'अभी भी प्रश्न हैं?'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? 'If you couldn\'t find the answer to your question, please feel free to contact us.'
                : 'यदि आप अपने प्रश्न का उत्तर नहीं ढूंढ पाए, तो कृपया हमसे संपर्क करने में संकोच न करें।'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-[#1a73e8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
              </a>
              <a 
                href="tel:+919929262986" 
                className="inline-block bg-white border border-[#1a73e8] text-[#1a73e8] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                {language === 'en' ? 'Call Us' : 'हमें कॉल करें'}: +91 9929262986
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
