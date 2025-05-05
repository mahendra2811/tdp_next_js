'use client';

import React, { useEffect } from 'react';

export default function TestPage() {
  useEffect(() => {
    console.log('Test Page: Component mounted');
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">This is a test page to check if redirection works.</p>

      <div className="mt-8">
        <button
          onClick={() => {
            console.log('Test Page: Redirecting to dashboard');
            try {
              console.log('Test Page: Using window.location.replace');
              window.location.replace('/admin/dashboard');
            } catch (e) {
              console.error('Test Page: Error during redirect:', e);
              console.log('Test Page: Fallback to traditional redirect');
              window.location.href = '/admin/dashboard';
            }
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Dashboard
        </button>

        <button
          onClick={() => {
            console.log('Test Page: Redirecting to login');
            try {
              console.log('Test Page: Using window.location.replace');
              window.location.replace('/admin/login');
            } catch (e) {
              console.error('Test Page: Error during redirect:', e);
              console.log('Test Page: Fallback to traditional redirect');
              window.location.href = '/admin/login';
            }
          }}
          className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
