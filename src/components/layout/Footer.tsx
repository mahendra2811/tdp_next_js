import Link from "next/link";
import { 
  contactInfo, 
  socialLinks, 
  footerLinks, 
  footerBottomLinks, 
  designerInfo 
} from "@/constant/footerInfo";
import { 
  PhoneIcon, 
  EmailIcon, 
  LocationIcon, 
  getSocialIcon 
} from "@/components/ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Footer Top Section */}
      <div className="bg-[#2a3b53] py-16"> {/* gunmetal color from the CSS */}
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="font-['Sacramento',_cursive] text-2xl text-white tracking-wider text-center md:text-left shadow-text">
                Thar Desert Photography
              </h2>
            </div>
            
            <h4 className="text-white font-medium mb-2 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#1a73e8]">
              Google map
            </h4>
            
            <div className="w-full h-[350px] mt-2">
              <iframe
                src={contactInfo.mapUrl}
                width="300"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="max-w-full"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#1a73e8]">
              Contact Us
            </h4>
            
            <p className="text-gray-300 mb-4 text-sm">
              Feel free to contact us at
            </p>
            
            {/* Social Links */}
            <ul className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="w-9 h-9 flex items-center justify-center text-white border border-white/30 rounded-full hover:bg-white/20 transition-colors"
                    aria-label={link.name}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Details */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <PhoneIcon />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <EmailIcon />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <LocationIcon />
                <address className="not-italic">{contactInfo.address}</address>
              </li>
            </ul>
          </div>
          
          {/* Links Section */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#1a73e8]">
              Links
            </h4>
            
            <div className="grid grid-cols-1 gap-2 text-gray-300 text-sm">
              {footerLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.url} 
                  className={`hover:text-white transition-colors ${
                    link.isSubLink ? "pl-4" : ""
                  } ${link.isSubSubLink ? "pl-8" : ""}`}
                >
                  {link.isSubLink && !link.isSubSubLink && "- "}
                  {link.isSubSubLink && "--"}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="bg-[#1e2c3f] py-5"> {/* darker gunmetal color */}
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} All rights reserved. | Designed by{" "}
            <a href={designerInfo.url} className="hover:text-white transition-colors">
              {designerInfo.name}
            </a>
          </p>
          
          <ul className="flex flex-wrap gap-4 md:gap-6">
            {footerBottomLinks.map((link, index) => (
              <li 
                key={index} 
                className={`relative ${
                  index > 0 ? "pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-white/20" : ""
                }`}
              >
                <Link href={link.url} className="text-gray-300 text-xs hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}