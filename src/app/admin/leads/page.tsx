'use client';

import React, { useEffect, useState } from 'react';
import { adminApi } from '@/utils/api';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';

interface LeadData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  createdAt: Date | string;
  updatedAt: Date | string;
}

// Mock data for temporary token
const mockLeads: LeadData[] = [
  {
    _id: 'lead-1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+91 9876543210',
    message: 'I am interested in booking a tour for my family of 4 in December.',
    status: 'new',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'lead-2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+91 9876543211',
    message: 'Looking for information about wildlife photography tours.',
    status: 'contacted',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'lead-3',
    name: 'Raj Patel',
    email: 'raj.patel@example.com',
    phone: '+91 9876543212',
    message: 'Interested in bird watching tours in January.',
    status: 'converted',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'lead-4',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    phone: '+91 9876543213',
    message: 'Need information about accommodation options during the tour.',
    status: 'closed',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'lead-5',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    phone: '+91 9876543214',
    message: 'Looking for a custom tour package for a group of 10 people.',
    status: 'new',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingTempToken, setIsUsingTempToken] = useState(false);

  // State for delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);

  // Fetch leads
  const fetchLeads = async () => {
    setIsLoading(true);
    setError(null);

    // Check if using temporary token
    const token = localStorage.getItem('tdp_token');
    if (token && token.startsWith('temp-token-')) {
      setIsUsingTempToken(true);
      setLeads(mockLeads);
      setIsLoading(false);
      return;
    }

    try {
      const response = await adminApi.getLeads();

      if (response.success && response.data) {
        // Map the response data to match our interface
        const formattedLeads = response.data.map((lead) => ({
          ...lead,
          createdAt: lead.createdAt.toString(),
          updatedAt: lead.updatedAt.toString(),
        }));
        setLeads(formattedLeads);
      } else {
        setError(response.message || 'Failed to load leads');
      }
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Handle status update
  const handleStatusUpdate = async (
    id: string,
    newStatus: 'new' | 'contacted' | 'converted' | 'closed'
  ) => {
    setError(null);

    if (isUsingTempToken) {
      // Update mock data
      setLeads(
        leads.map((lead) =>
          lead._id === id
            ? { ...lead, status: newStatus, updatedAt: new Date().toISOString() }
            : lead
        )
      );
      return;
    }

    try {
      const response = await adminApi.updateLeadStatus(id, newStatus);

      if (response.success) {
        fetchLeads();
      } else {
        setError(response.message || 'Failed to update lead status');
      }
    } catch (err) {
      console.error('Error updating lead status:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  // Open delete confirmation modal
  const openDeleteModal = (id: string) => {
    setLeadToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Handle delete after confirmation
  const handleDelete = async () => {
    if (!leadToDelete) return;

    setError(null);

    if (isUsingTempToken) {
      // Update mock data
      setLeads(leads.filter((lead) => lead._id !== leadToDelete));

      // Reset delete state
      setLeadToDelete(null);
      return;
    }

    try {
      const response = await adminApi.deleteLead(leadToDelete);

      if (response.success) {
        fetchLeads();
      } else {
        setError(response.message || 'Failed to delete lead');
      }
    } catch (err) {
      console.error('Error deleting lead:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      // Reset delete state
      setLeadToDelete(null);
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

  if (isLoading && leads.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Leads</h1>
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

      {/* Leads Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {leads.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No leads found.</div>
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
                    Message
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
                {leads.map((lead) => (
                  <tr key={lead._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{lead.email}</div>
                      <div className="text-sm text-gray-500">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {lead.message || 'No message'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          handleStatusUpdate(
                            lead._id,
                            e.target.value as 'new' | 'contacted' | 'converted' | 'closed'
                          )
                        }
                        className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          lead.status
                        )} border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(lead.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openDeleteModal(lead._id)}
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

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName={
          leadToDelete ? leads.find((lead) => lead._id === leadToDelete)?.name || 'this lead' : ''
        }
        title="Delete Lead"
      />
    </div>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'new':
      return 'bg-blue-100 text-blue-800';
    case 'contacted':
      return 'bg-purple-100 text-purple-800';
    case 'converted':
      return 'bg-green-100 text-green-800';
    case 'closed':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}
