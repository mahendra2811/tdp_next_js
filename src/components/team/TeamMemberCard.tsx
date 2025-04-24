import Image from "next/image";
import { Phone, MessageCircle, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
  contact: {
    phone: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
    youtube: string;
    twitter: string;
  };
}

export default function TeamMemberCard({
  name,
  role,
  image,
  description,
  contact
}: TeamMemberProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <h3 className="text-primary italic mb-4">{role}</h3>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <ul className="flex flex-wrap gap-3 justify-center">
          {contact.phone !== "#" && (
            <li>
              <a 
                href={`tel:${contact.phone}`} 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                aria-label={`Call ${name}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </li>
          )}
          
          {contact.whatsapp !== "#" && (
            <li>
              <a 
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-colors"
                aria-label={`WhatsApp ${name}`}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </li>
          )}
          
          {contact.instagram !== "#" && (
            <li>
              <a 
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-600 hover:text-white transition-colors"
                aria-label={`Instagram profile of ${name}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
            </li>
          )}
          
          {contact.facebook !== "#" && (
            <li>
              <a 
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label={`Facebook profile of ${name}`}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </li>
          )}
          
          {contact.youtube !== "#" && (
            <li>
              <a 
                href={contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors"
                aria-label={`YouTube channel of ${name}`}
              >
                <Youtube className="w-5 h-5" />
              </a>
            </li>
          )}
          
          {contact.twitter !== "#" && (
            <li>
              <a 
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white transition-colors"
                aria-label={`Twitter profile of ${name}`}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}