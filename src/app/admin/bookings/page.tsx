'use client';

import React, { useEffect, useState } from 'react';
import { adminApi } from '@/utils/api';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';

interface BookingItem {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  country: string;
  otherCountry?: string;
  state?: string;
  district?: string;
  pincode?: string;
  checkInDate: string;
  checkOutDate: string;
  tourists: number;
  queries?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<BookingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<BookingItem | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');
  
  // State for delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState<string | null>(null);

  // Fetch bookings
  const fetchBookings = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await adminApi.getBookings();
      
      if (response.success && response.data) {
        // Format dates from Date objects to strings
        const formattedBookings = response.data.map(booking => ({
          ...booking,
          checkInDate: new Date(booking.checkInDate).toISOString().split('T')[0],
          checkOutDate: new Date(booking.checkOutDate).toISOString().split('T')[0],
          createdAt: new Date(booking.createdAt).toISOString(),
          updatedAt: new Date(booking.updatedAt).toISOString()
        }));
        
        setBookings(formattedBookings);
        setFilteredBookings(formattedBookings);
      } else {
        setError(response.message || 'Failed to load bookings');
      }
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...bookings];
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(booking => booking.status === statusFilter);
    }
    
    // Apply search filter (case insensitive)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(booking => 
        booking.name.toLowerCase().includes(query) ||
        booking.email?.toLowerCase().includes(query) ||
        booking.phone.toLowerCase().includes(query) ||
        booking.country.toLowerCase().includes(query)
      );
    }
    
    // Apply date filter
    if (dateFilter) {
      result = result.filter(booking => 
        booking.checkInDate <= dateFilter && booking.checkOutDate >= dateFilter
      );
    }
    
    // Sort by created date (newest first)
    result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    setFilteredBookings(result);
  }, [bookings, statusFilter, searchQuery, dateFilter]);

  // Handle status update
  const handleStatusUpdate = async (id: string, newStatus: 'pending' | 'confirmed' | 'cancelled') => {
    setError(null);

    try {
      const response = await adminApi.updateBookingStatus(id, newStatus);
      
      if (response.success) {
        // Update local state
        const updatedBookings = bookings.map(booking => 
          booking._id === id ? { ...booking, status: newStatus } : booking
        );
        setBookings(updatedBookings);
        
        // Update selected booking if it's the one being updated
        if (selectedBooking && selectedBooking._id === id) {
          setSelectedBooking({ ...selectedBooking, status: newStatus });
        }
      } else {
        setError(response.message || 'Failed to update booking status');
      }
    } catch (err) {
      console.error('Error updating booking status:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  // Open delete confirmation modal
  const openDeleteModal = (id: string) => {
    setBookingToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Handle booking deletion after confirmation
  const handleDelete = async () => {
    if (!bookingToDelete) return;
    
    setError(null);

    try {
      const response = await adminApi.deleteBooking(bookingToDelete);
      
      if (response.success) {
        // Remove from local state
        const updatedBookings = bookings.filter(booking => booking._id !== bookingToDelete);
        setBookings(updatedBookings);
        
        // Close details modal if it's the one being deleted
        if (selectedBooking && selectedBooking._id === bookingToDelete) {
          setShowDetails(false);
          setSelectedBooking(null);
        }
      } else {
        setError(response.message || 'Failed to delete booking');
      }
    } catch (err) {
      console.error('Error deleting booking:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      // Reset delete state
      setBookingToDelete(null);
    }
  };

  // View booking details
  const viewBookingDetails = (booking: BookingItem) => {
    setSelectedBooking(booking);
    setShowDetails(true);
  };

  if (isLoading && bookings.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Bookings</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => fetchBookings()}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="statusFilter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="searchQuery" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              id="searchQuery"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="dateFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Date (Check-in/Check-out Range)
            </label>
            <input
              id="dateFilter"
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {filteredBookings.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No bookings found matching your filters.
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
                    Dates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tourists
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                      <div className="text-sm text-gray-500">{booking.country}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{booking.phone}</div>
                      {booking.email && <div className="text-sm text-gray-500">{booking.email}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDate(booking.checkInDate)} to {formatDate(booking.checkOutDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.tourists}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDateTime(booking.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => viewBookingDetails(booking)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        View
                      </button>
                      <button
                        onClick={() => openDeleteModal(booking._id)}
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

      {/* Booking Details Modal */}
      {showDetails && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowDetails(false)}></div>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4 z-10 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="text-base">{selectedBooking.name}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p className="text-base">{selectedBooking.phone}</p>
              </div>
              
              {selectedBooking.email && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="text-base">{selectedBooking.email}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Country</h3>
                <p className="text-base">
                  {selectedBooking.country === 'Other' 
                    ? selectedBooking.otherCountry 
                    : selectedBooking.country}
                </p>
              </div>
              
              {selectedBooking.country === 'India' && (
                <>
                  {selectedBooking.state && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">State</h3>
                      <p className="text-base">{selectedBooking.state}</p>
                    </div>
                  )}
                  
                  {selectedBooking.district && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">District</h3>
                      <p className="text-base">{selectedBooking.district}</p>
                    </div>
                  )}
                  
                  {selectedBooking.pincode && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Pin Code</h3>
                      <p className="text-base">{selectedBooking.pincode}</p>
                    </div>
                  )}
                </>
              )}
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Check-in Date</h3>
                <p className="text-base">{formatDate(selectedBooking.checkInDate)}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Check-out Date</h3>
                <p className="text-base">{formatDate(selectedBooking.checkOutDate)}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Number of Tourists</h3>
                <p className="text-base">{selectedBooking.tourists}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className="text-base">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedBooking.status)}`}>
                    {selectedBooking.status}
                  </span>
                </p>
              </div>
            </div>
            
            {selectedBooking.queries && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Queries/Comments</h3>
                <p className="text-base bg-gray-50 p-3 rounded">{selectedBooking.queries}</p>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Created At</h3>
              <p className="text-base">{formatDateTime(selectedBooking.createdAt)}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Update Status</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleStatusUpdate(selectedBooking._id, 'pending')}
                  disabled={selectedBooking.status === 'pending'}
                  className={`px-4 py-2 rounded-md ${
                    selectedBooking.status === 'pending'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => handleStatusUpdate(selectedBooking._id, 'confirmed')}
                  disabled={selectedBooking.status === 'confirmed'}
                  className={`px-4 py-2 rounded-md ${
                    selectedBooking.status === 'confirmed'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleStatusUpdate(selectedBooking._id, 'cancelled')}
                  disabled={selectedBooking.status === 'cancelled'}
                  className={`px-4 py-2 rounded-md ${
                    selectedBooking.status === 'cancelled'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-red-100 text-red-800 hover:bg-red-200'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName={bookingToDelete ? bookings.find(b => b._id === bookingToDelete)?.name || 'this booking' : ''}
        title="Delete Booking"
      />
    </div>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}