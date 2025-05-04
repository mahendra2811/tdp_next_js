'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import HeroWithHeader from '@/components/common/HeroWithHeader';

export default function TermsAndConditionsPage() {
  const { language } = useLanguage();
  
  const title = language === 'en' ? 'Terms & Conditions' : 'नियम और शर्तें';
  const subtitle = language === 'en' 
    ? 'Please read these terms carefully before using our services' 
    : 'हमारी सेवाओं का उपयोग करने से पहले कृपया इन शर्तों को ध्यान से पढ़ें';
  
  return (
    <main>
      <div className="min-h-screen">
        {/* Hero Section with Header */}
        <HeroWithHeader
          title={title}
          subtitle={subtitle}
          backgroundImage="/assets/Images/contact/banner.JPG"
        />

        {/* Terms and Conditions Content */}
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Terms and Conditions</h2>
            
            <p className="mb-4">
              Last Updated: May 4, 2025
            </p>
            
            <p className="mb-4">
              Please read these terms and conditions carefully before using the Thar Desert Photography website.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h3>
            
            <p className="mb-4">
              These Website Standard Terms and Conditions (these "Terms" or these "Website Standard Terms and Conditions") contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this "Website"). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website, if you have any objection to any of these Website Standard Terms and Conditions.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h3>
            
            <p className="mb-4">
              Other than content you own, which you may have opted to include on this Website, under these Terms, Thar Desert Photography and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.
            </p>
            
            <p className="mb-4">
              You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">3. Restrictions</h3>
            
            <p className="mb-4">
              You are expressly and emphatically restricted from all of the following:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Publishing any Website material in any media;</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>Publicly performing and/or showing any Website material;</li>
              <li>Using this Website in any way that is, or may be, damaging to this Website;</li>
              <li>Using this Website in any way that impacts user access to this Website;</li>
              <li>Using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;</li>
              <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website;</li>
              <li>Using this Website to engage in any advertising or marketing;</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">4. Your Content</h3>
            
            <p className="mb-4">
              In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Thar Desert Photography a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>
            
            <p className="mb-4">
              Your Content must be your own and must not be infringing on any third party's rights. Thar Desert Photography reserves the right to remove any of Your Content from this Website at any time, and for any reason, without notice.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">5. No Warranties</h3>
            
            <p className="mb-4">
              This Website is provided "as is," with all faults, and Thar Desert Photography makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">6. Limitation of Liability</h3>
            
            <p className="mb-4">
              In no event shall Thar Desert Photography, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Thar Desert Photography, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">7. Indemnification</h3>
            
            <p className="mb-4">
              You hereby indemnify to the fullest extent Thar Desert Photography from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">8. Severability</h3>
            
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">9. Variation of Terms</h3>
            
            <p className="mb-4">
              Thar Desert Photography is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this Website.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">10. Entire Agreement</h3>
            
            <p className="mb-4">
              These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Thar Desert Photography and you in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">11. Governing Law & Jurisdiction</h3>
            
            <p className="mb-4">
              These Terms will be governed by and construed in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}