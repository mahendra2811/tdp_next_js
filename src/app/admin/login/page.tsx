'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authApi, setToken } from '@/utils/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    console.log('Login page: Checking for existing token');
    const token = localStorage.getItem('tdp_token');
    console.log('Login page: Token exists:', !!token);
    if (token) {
      console.log('Login page: Token found, redirecting to dashboard');
      window.location.href = '/admin/dashboard';
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      // Use the API for login
      console.log('Login page: Using API for login');
      const response = await authApi.login({ email, password });
      console.log('Login page: API response received');
      console.log('Login page: Response success:', response.success);
      console.log('Login page: Response message:', response.message);

      if (response.success) {
        // Show success message
        setError('Login successful');
        
        // If we have a token from the API, use it
        if (response.data && response.data.token) {
          console.log('Login page: Storing token');
          setToken(response.data.token);
        } else {
          // If no token but success, create a temporary token
          console.log('Login page: Creating temporary token');
          setToken('temp-token-' + Date.now());
        }
        
        // Redirect to dashboard
        setTimeout(() => {
          console.log('Login page: Redirecting to dashboard');
          window.location.href = '/admin/dashboard';
        }, 1000);
      } else {
        console.log('Login page: Login failed');
        setError(response.message || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>

        {error && (
          <div className={`px-4 py-3 rounded mb-4 ${error === 'Login successful' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="admin@tdp.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>This area is restricted to authorized personnel only.</p>
          <p className="mt-2 text-xs text-gray-500">Use admin@tdp.com / Admin@1234</p>
        </div>
      </div>
    </div>
  );
}
