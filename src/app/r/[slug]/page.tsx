'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface RedirectPageProps {
  params: {
    slug: string;
  };
}

export default function RedirectPage({ params }: RedirectPageProps) {
  const { slug } = params;
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRedirect = async () => {
      try {
        // Make a request to the backend API to handle the redirect
        const response = await fetch(`/api/redirects/r/${slug}`);
        
        if (response.ok) {
          const data = await response.json();
          
          if (data.targetUrl) {
            // Redirect to the target URL
            window.location.href = data.targetUrl;
          } else {
            setError('Redirect not found');
            setIsLoading(false);
          }
        } else {
          setError('Redirect not found');
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error handling redirect:', err);
        setError('An error occurred while processing the redirect');
        setIsLoading(false);
      }
    };

    fetchRedirect();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600">Redirecting you to your destination...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Redirect Not Found</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return null;
}