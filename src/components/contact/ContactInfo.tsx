import Link from "next/link";
import { contactInfo } from "@/constant/contactInfo";

export default function ContactInfo() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Contact Sharvan Patel</h2>
        
        <div className="overflow-hidden rounded-lg shadow-lg">
          <table className="w-full bg-white border-collapse">
            <tbody>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">Full Name</td>
                <td className="border border-gray-200 p-3">{contactInfo.fullName}</td>
              </tr>
              
              <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">Phone</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-primary hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">WhatsApp</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={contactInfo.whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {contactInfo.whatsapp}
                  </a>
                </td>
              </tr>
              
              <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">Instagram</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={contactInfo.socialMedia.instagram.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {contactInfo.socialMedia.instagram.username}
                  </a>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">Facebook</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={contactInfo.socialMedia.facebook.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {contactInfo.socialMedia.facebook.username}
                  </a>
                </td>
              </tr>
              
              <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">YouTube</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={contactInfo.socialMedia.youtube.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {contactInfo.socialMedia.youtube.username}
                  </a>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">Twitter</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={contactInfo.socialMedia.twitter.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {contactInfo.socialMedia.twitter.username}
                  </a>
                </td>
              </tr>
              
              <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">Email</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border border-gray-200 p-3 font-medium">Location</td>
                <td className="border border-gray-200 p-3">
                  <a 
                    href={contactInfo.locationLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {contactInfo.location}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}