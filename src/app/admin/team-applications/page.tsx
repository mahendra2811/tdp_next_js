'use client';

import React, { useEffect, useState } from 'react';
import { adminApi } from '@/utils/api';

interface TeamApplicationData {
  _id: string;
  name: string;
  mobile: string;
  email?: string;
  address: string;
  reason: string;
  extra?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: Date | string;
  updatedAt: Date | string;
}

// Mock data for temporary token
const mockApplications: TeamApplicationData[] = [
  {
    _id: 'app-1',
    name: 'Rahul Sharma',
    mobile: '+91 9876543210',
    email: 'rahul.sharma@example.com',
    address: '123 Main St, Jodhpur, Rajasthan',
    reason: 'I am passionate about wildlife photography and have been documenting desert wildlife for 3 years.',
    extra: 'I have my own photography equipment and have published in local magazines.',
    status: 'pending',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'app-2',
    name: 'Priya Patel',
    mobile: '+91 9876543211',
    email: 'priya.patel@example.com',
    address: '456 Park Ave, Jaisalmer, Rajasthan',
    reason: 'I am a local guide with extensive knowledge of the Thar Desert ecosystem.',
    status: 'reviewed',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'app-3',
    name: 'Amit Kumar',
    mobile: '+91 9876543212',
    email: 'amit.kumar@example.com',
    address: '789 Desert Road, Bikaner, Rajasthan',
    reason: 'I have been working as a tour guide for 5 years and want to specialize in wildlife photography tours.',
    extra: 'I speak Hindi, English, and German fluently.',
    status: 'accepted',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'app-4',
    name: 'Neha Singh',
    mobile: '+91 9876543213',
    address: '101 Village Road, Barmer, Rajasthan',
    reason: 'I am interested in joining as a part-time guide during weekends.',
    status: 'rejected',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'app-5',
    name: 'Vikram Mehra',
    mobile: '+91 9876543214',
    email: 'vikram.m@example.com',
    address: '202 Desert View, Jaipur, Rajasthan',
    reason: 'I am a wildlife biologist specializing in desert ecosystems and want to contribute to your educational tours.',
    extra: 'I have published research papers on the Great Indian Bustard conservation.',
    status: 'pending',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export default function TeamApplicationsPage() {
  const [applications, setApplications] = useState<TeamApplicationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<TeamApplicationData | null>(null);
  const [isUsingTempToken, setIsUsingTempToken] = useState(false);

  // Fetch team applications
  const fetchApplications = async () => {
    setIsLoading(true);
    setError(null);

    // Check if using temporary token
    const token = localStorage.getItem('tdp_token');
    if (token && token.startsWith('temp-token-')) {
      setIsUsingTempToken(true);
      setApplications(mockApplications);
      setIsLoading(false);
      return;
    }

    try {
      const response = await adminApi.getTeamApplications();

      if (response.success && response.data) {
        // Map the response data to match our interface
        const formattedApplications = response.data.map((app) => ({
          ...app,
          createdAt: app.createdAt.toString(),
          updatedAt: app.updatedAt.toString(),
        }));
        setApplications(formattedApplications);
      } else {
        setError(response.message || 'Failed to load team applications');
      }
    } catch (err) {
      console.error('Error fetching team applications:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Handle status update
  const handleStatusUpdate = async (id: string, newStatus: 'pending' | 'reviewed' | 'accepted' | 'rejected') => {
    setError(null);

    if (isUsingTempToken) {
      // Update mock data
      setApplications(
        applications.map((app) =>
          app._id === id ? { ...app, status: newStatus, updatedAt: new Date().toISOString() } : app
        )
      );
      
      // Update selected application if it's the one being updated
      if (selectedApplication && selectedApplication._id === id) {
        setSelectedApplication({
          ...selectedApplication,
          status: newStatus,
          updatedAt: new Date().toISOString()
        });
      }
      
      return;
    }

    try {
      const response = await adminApi.updateTeamApplicationStatus(id, newStatus);

      if (response.success) {
        fetchApplications();
      } else {
        setError(response.message || 'Failed to update application status');
      }
    } catch (err) {
      console.error('Error updating application status:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this application?')) {
      return;
    }

    setError(null);

    if (isUsingTempToken) {
      // Update mock data
      setApplications(applications.filter((app) => app._id !== id));
      
      // Clear selected application if it's the one being deleted
      if (selectedApplication && selectedApplication._id === id) {
        setSelectedApplication(null);
      }
      
      return;
    }

    try {
      const response = await adminApi.deleteTeamApplication(id);

      if (response.success) {
        fetchApplications();
        if (selectedApplication && selectedApplication._id === id) {
          setSelectedApplication(null);
        }
      } else {
        setError(response.message || 'Failed to delete application');
      }
    } catch (err) {
      console.error('Error deleting application:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  // Format date
  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (isLoading && applications.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team Applications</h1>
      </div>

      {isUsingTempToken && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded mb-6">
          <p className="font-medium">You are using a temporary token for demonstration purposes.</p>
          <p className="text-sm mt-1">
            Changes you make will be stored in memory and will be lost on page refresh.
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications List */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {applications.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No team applications found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map((app) => (
                      <tr 
                        key={app._id} 
                        className={`cursor-pointer hover:bg-gray-50 ${selectedApplication?._id === app._id ? 'bg-blue-50' : ''}`}
                        onClick={() => setSelectedApplication(app)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{app.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{app.email || 'No email'}</div>
                          <div className="text-sm text-gray-500">{app.mobile}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={app.status}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(app._id, e.target.value as 'pending' | 'reviewed' | 'accepted' | 'rejected');
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                              app.status
                            )} border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(app.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(app._id);
                            }}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Application Details */}
        <div className="lg:col-span-1">
          {selectedApplication ? (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Application Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name</h3>
                  <p className="mt-1">{selectedApplication.name}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Contact</h3>
                  <p className="mt-1">{selectedApplication.email || 'No email'}</p>
                  <p className="mt-1">{selectedApplication.mobile}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Address</h3>
                  <p className="mt-1">{selectedApplication.address}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Reason for Applying</h3>
                  <p className="mt-1">{selectedApplication.reason}</p>
                </div>
                
                {selectedApplication.extra && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Additional Information</h3>
                    <p className="mt-1">{selectedApplication.extra}</p>
                  </div>
                )}
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <div className="mt-1">
                    <span className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedApplication.status)}`}>
                      {formatStatus(selectedApplication.status)}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Application Date</h3>
                  <p className="mt-1">{formatDate(selectedApplication.createdAt)}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
              Select an application to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'reviewed':
      return 'bg-blue-100 text-blue-800';
    case 'accepted':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function formatStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}