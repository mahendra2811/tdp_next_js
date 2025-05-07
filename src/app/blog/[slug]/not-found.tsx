import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';

export default function BlogNotFound() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="relative bg-black">
        <Header />
      </div>
      
      {/* Not Found Content */}
      <div className="container max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or may have been removed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            Return to Blog
          </Link>
          
          <Link 
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}