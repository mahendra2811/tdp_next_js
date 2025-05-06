'use client';

import React, { useEffect, useState } from 'react';
import { adminApi } from '@/utils/api';
import Link from 'next/link';

interface DashboardStats {
  leads: number;
  bookings: number;
  teamApplications: number;
  redirects: number;
  blogs: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    leads: 0,
    bookings: 0,
    teamApplications: 0,
    redirects: 0,
    blogs: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingTempToken, setIsUsingTempToken] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      setError(null);

      // Check if using temporary token
      const token = localStorage.getItem('tdp_token');
      if (token && token.startsWith('temp-token-')) {
        setIsUsingTempToken(true);
        // Set mock stats for demo
        setStats({
          leads: 12,
          bookings: 8,
          teamApplications: 5,
          redirects: 10,
          blogs: 3,
        });
        setIsLoading(false);
        return;
      }

      try {
        // In a real implementation, we would fetch stats from the backend
        // For now, we'll use mock data
        const leadsResponse = await adminApi.getLeads();
        const redirectsResponse = await adminApi.getRedirects();
        const teamAppsResponse = await adminApi.getTeamApplications();
        const bookingsResponse = await adminApi.getBookings();

        if (
          leadsResponse.success &&
          redirectsResponse.success &&
          teamAppsResponse.success &&
          bookingsResponse.success
        ) {
          setStats({
            leads: leadsResponse.data?.length || 0,
            bookings: bookingsResponse.data?.length || 0,
            teamApplications: teamAppsResponse.data?.length || 0,
            redirects: redirectsResponse.data?.length || 0,
            blogs: 3, // Placeholder until we have a real API endpoint
          });
        } else {
          setError('Failed to load dashboard stats');
        }
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {isUsingTempToken && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded mb-6">
          <p className="font-medium">You are using a temporary token for demonstration purposes.</p>
          <p className="text-sm mt-1">
            In a production environment, you would be connected to a real backend with actual data.
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {/* Leads Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Leads</h2>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.leads}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/leads"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all leads &rarr;
            </Link>
          </div>
        </div>

        {/* Bookings Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Bookings</h2>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.bookings}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/bookings"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all bookings &rarr;
            </Link>
          </div>
        </div>

        {/* Team Applications Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Team Applications</h2>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.teamApplications}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/team-applications"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all applications &rarr;
            </Link>
          </div>
        </div>

        {/* Redirects Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Redirects</h2>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.redirects}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/redirects"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all redirects &rarr;
            </Link>
          </div>
        </div>

        {/* Blogs Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Blog Posts</h2>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.blogs}</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/blogs"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Manage blog posts &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Link
            href="/admin/leads"
            className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 rounded-lg text-center"
          >
            Manage Leads
          </Link>
          <Link
            href="/admin/team-applications"
            className="bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium py-3 px-4 rounded-lg text-center"
          >
            Review Applications
          </Link>
          <Link
            href="/admin/redirects"
            className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-medium py-3 px-4 rounded-lg text-center"
          >
            Manage Redirects
          </Link>
          <Link
            href="/admin/bookings"
            className="bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 px-4 rounded-lg text-center"
          >
            View Bookings
          </Link>
          <Link
            href="/admin/blogs"
            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-3 px-4 rounded-lg text-center"
          >
            Manage Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
