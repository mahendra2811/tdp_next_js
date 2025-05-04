'use client';
import React from 'react';
import { jojariRiverInfo } from '@/constant/jojariRiverInfo';
import { jojariRiverInfoHindi } from '@/constant/jojariRiverInfoHindi';
import { useLanguage } from '@/context/LanguageContext';

export default function ConservationProjects() {
  const { language } = useLanguage();
  const info = language === 'en' ? jojariRiverInfo : jojariRiverInfoHindi;

  // Safely access conservationProjects, falling back to English if Hindi version doesn't have it
  const projects = info.conservationProjects || jojariRiverInfo.conservationProjects;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">
          {language === 'en'
            ? 'Conservation Projects for Jojari River'
            : 'जोजारी नदी के लिए संरक्षण परियोजनाएं'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Project Name' : 'परियोजना का नाम'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Year' : 'वर्ष'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Status' : 'स्थिति'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Impact' : 'प्रभाव'}
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-2 font-medium">{project.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{project.year}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={
                        project.status === 'Completed' || project.status === 'पूर्ण'
                          ? 'text-green-600 font-medium'
                          : project.status === 'Active' ||
                            project.status === 'Ongoing' ||
                            project.status === 'सक्रिय' ||
                            project.status === 'जारी'
                          ? 'text-blue-600 font-medium'
                          : project.status === 'Initial Phase' || project.status === 'प्रारंभिक चरण'
                          ? 'text-amber-600 font-medium'
                          : 'text-gray-600 font-medium'
                      }
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{project.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            {language === 'en' ? 'Conservation Efforts' : 'संरक्षण प्रयास'}
          </h4>
          <p className="text-gray-700 leading-relaxed">{info.riverInfo[8].description}</p>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Conservation Timeline' : 'संरक्षण समयरेखा'}
            </h4>
            <div className="relative">
              {projects.map((project, index) => (
                <div key={index} className="mb-8 flex">
                  <div className="flex-none w-24 text-sm font-medium text-gray-600">
                    {project.year}
                  </div>
                  <div className="flex-none w-6 relative">
                    <div className="h-full w-0.5 bg-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
                    <div
                      className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                        project.status === 'Completed' || project.status === 'पूर्ण'
                          ? 'bg-green-500 border-green-600'
                          : project.status === 'Active' ||
                            project.status === 'Ongoing' ||
                            project.status === 'सक्रिय' ||
                            project.status === 'जारी'
                          ? 'bg-blue-500 border-blue-600'
                          : project.status === 'Initial Phase' || project.status === 'प्रारंभिक चरण'
                          ? 'bg-amber-500 border-amber-600'
                          : 'bg-gray-500 border-gray-600'
                      }`}
                    ></div>
                  </div>
                  <div className="flex-grow pl-4">
                    <h5 className="font-semibold">{project.name}</h5>
                    <p className="text-sm text-gray-600">
                      {language === 'en' ? 'Status: ' : 'स्थिति: '}
                      {project.status}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{project.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
