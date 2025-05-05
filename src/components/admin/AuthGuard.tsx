'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { authApi, removeToken } from '@/utils/api';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      console.log('AuthGuard: Checking authentication for path:', pathname);

      // Skip auth check for login page
      if (pathname === '/admin/login') {
        console.log('AuthGuard: On login page, skipping auth check');
        setIsLoading(false);
        return;
      }

      const token = localStorage.getItem('tdp_token');
      console.log('AuthGuard: Token exists:', !!token);

      if (!token) {
        console.log('AuthGuard: No token found, redirecting to login');
        window.location.href = '/admin/login';
        return;
      }

      // Check if token is a temporary token
      if (token.startsWith('temp-token-')) {
        console.log('AuthGuard: Temporary token found, authentication successful');
        setIsAuthenticated(true);
        setIsLoading(false);
        return;
      }

      try {
        // Verify token with the server by getting the user profile
        console.log('AuthGuard: Verifying token with server');
        const response = await authApi.getProfile();
        
        if (response.success && response.data) {
          console.log('AuthGuard: Token verified, user authenticated');
          setIsAuthenticated(true);
        } else {
          console.log('AuthGuard: Token invalid, redirecting to login');
          removeToken();
          window.location.href = '/admin/login';
        }
      } catch (error) {
        console.error('AuthGuard: Error verifying token:', error);
        
        // If API verification fails, redirect to login
        console.log('AuthGuard: API verification failed, redirecting to login');
        removeToken();
        window.location.href = '/admin/login';
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If on login page or authenticated, render children
  if (pathname === '/admin/login' || isAuthenticated) {
    return <>{children}</>;
  }

  // This should not be visible as we redirect in the useEffect
  return null;
}
