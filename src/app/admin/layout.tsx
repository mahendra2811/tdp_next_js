'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AuthGuard from '@/components/admin/AuthGuard';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('tdp_token');
    if (token) {
      setIsAuthenticated(true);
    } else if (!isLoginPage) {
      // Redirect to login if not authenticated and not on login page
      router.push('/admin/login');
    }
    setIsLoading(false);
  }, [isLoginPage, router]);

  // Handle navigation without using Next.js Link component
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Use window.location for navigation to force a full page reload
    // This ensures the AuthGuard is properly re-evaluated
    window.location.href = href;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-100">
        {!isLoginPage && isAuthenticated && (
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <a 
                      href="/admin/dashboard" 
                      onClick={(e) => handleNavigation(e, '/admin/dashboard')}
                      className="text-xl font-bold text-blue-600"
                    >
                      TDP Admin
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <NavLink 
                      href="/admin/dashboard" 
                      current={pathname === '/admin/dashboard'}
                      onClick={handleNavigation}
                    >
                      Dashboard
                    </NavLink>
                    <NavLink 
                      href="/admin/bookings" 
                      current={pathname.startsWith('/admin/bookings')}
                      onClick={handleNavigation}
                    >
                      Bookings
                    </NavLink>
                    <NavLink 
                      href="/admin/leads" 
                      current={pathname.startsWith('/admin/leads')}
                      onClick={handleNavigation}
                    >
                      Leads
                    </NavLink>
                    <NavLink 
                      href="/admin/team-applications" 
                      current={pathname.startsWith('/admin/team-applications')}
                      onClick={handleNavigation}
                    >
                      Team Applications
                    </NavLink>
                    <NavLink 
                      href="/admin/redirects" 
                      current={pathname.startsWith('/admin/redirects')}
                      onClick={handleNavigation}
                    >
                      Redirects
                    </NavLink>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      localStorage.removeItem('tdp_token');
                      window.location.href = '/admin/login';
                    }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile menu */}
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <MobileNavLink 
                  href="/admin/dashboard" 
                  current={pathname === '/admin/dashboard'}
                  onClick={handleNavigation}
                >
                  Dashboard
                </MobileNavLink>
                <MobileNavLink 
                  href="/admin/bookings" 
                  current={pathname.startsWith('/admin/bookings')}
                  onClick={handleNavigation}
                >
                  Bookings
                </MobileNavLink>
                <MobileNavLink 
                  href="/admin/leads" 
                  current={pathname.startsWith('/admin/leads')}
                  onClick={handleNavigation}
                >
                  Leads
                </MobileNavLink>
                <MobileNavLink 
                  href="/admin/team-applications" 
                  current={pathname.startsWith('/admin/team-applications')}
                  onClick={handleNavigation}
                >
                  Team Applications
                </MobileNavLink>
                <MobileNavLink 
                  href="/admin/redirects" 
                  current={pathname.startsWith('/admin/redirects')}
                  onClick={handleNavigation}
                >
                  Redirects
                </MobileNavLink>
              </div>
            </div>
          </nav>
        )}
        
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}

interface NavLinkProps {
  href: string;
  current: boolean;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function NavLink({ href, current, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        current
          ? 'border-blue-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, current, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
        current
          ? 'bg-blue-50 border-blue-500 text-blue-700'
          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
      }`}
    >
      {children}
    </a>
  );
}