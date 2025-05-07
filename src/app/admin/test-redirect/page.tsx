'use client';

import { useEffect } from 'react';

export default function TestRedirect() {
  useEffect(() => {
    console.log('Test Redirect: Component mounted');
    console.log('Test Redirect: Redirecting to dashboard in 2 seconds...');
    
    // Redirect after 2 seconds
    const timer = setTimeout(() => {
      console.log('Test Redirect: Redirecting now using window.location.href');
      window.location.href = '/admin/dashboard';
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Redirect Page</h1>
      <p>This page will redirect to the dashboard in 2 seconds...</p>
    </div>
  );
}