'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function AuthTestPage() {
  const { user, userProfile, logout } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Firebase Authentication Test</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Authentication Status</h2>
            <p>
              <span className="font-medium">Status:</span>{' '}
              {user ? (
                <span className="text-green-600 font-semibold">Authenticated</span>
              ) : (
                <span className="text-red-600 font-semibold">Not Authenticated</span>
              )}
            </p>
          </div>

          {user && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">User Information</h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">UID:</span> {user.uid}
                </li>
                <li>
                  <span className="font-medium">Email:</span> {user.email}
                </li>
                <li>
                  <span className="font-medium">Display Name:</span>{' '}
                  {user.displayName || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">Email Verified:</span>{' '}
                  {user.emailVerified ? 'Yes' : 'No'}
                </li>
              </ul>
            </div>
          )}

          {userProfile && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">User Profile</h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Display Name:</span>{' '}
                  {userProfile.displayName || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">Phone Number:</span>{' '}
                  {userProfile.phoneNumber || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">Address:</span>{' '}
                  {userProfile.address || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">City:</span>{' '}
                  {userProfile.city || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">State:</span>{' '}
                  {userProfile.state || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">Country:</span>{' '}
                  {userProfile.country || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">Pincode:</span>{' '}
                  {userProfile.pincode || 'Not set'}
                </li>
                <li>
                  <span className="font-medium">Bio:</span>{' '}
                  {userProfile.bio || 'Not set'}
                </li>
              </ul>
            </div>
          )}

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Authentication Actions</h2>
            <div className="flex flex-wrap gap-4">
              {user ? (
                <>
                  <button
                    onClick={() => logout()}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Logout
                  </button>
                  <Link
                    href="/profile"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Edit Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/auth"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth?mode=signup"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/auth"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Auth Page
              </Link>
              <Link
                href="/profile"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Profile Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}