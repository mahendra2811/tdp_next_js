'use client';

import React, { useEffect, useState } from 'react';
import { adminApi } from '@/utils/api';

interface RedirectData {
  _id: string;
  slug: string;
  targetUrl: string;
  description?: string;
  category: 'social' | 'community' | 'partner' | 'other';
  active: boolean;
  clickCount: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// Mock data for temporary token
const mockRedirects: RedirectData[] = [
  {
    _id: 'redirect-1',
    slug: 'instagram',
    targetUrl: 'https://www.instagram.com/thardesertphotography',
    description: 'Our Instagram page',
    category: 'social',
    active: true,
    clickCount: 245,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'redirect-2',
    slug: 'facebook',
    targetUrl: 'https://www.facebook.com/thardesertphotography',
    description: 'Our Facebook page',
    category: 'social',
    active: true,
    clickCount: 187,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'redirect-3',
    slug: 'twitter',
    targetUrl: 'https://twitter.com/thardesertphoto',
    description: 'Our Twitter account',
    category: 'social',
    active: true,
    clickCount: 92,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'redirect-4',
    slug: 'wildlife-trust',
    targetUrl: 'https://www.wildlifetrust.org',
    description: 'Wildlife Trust of India',
    category: 'partner',
    active: true,
    clickCount: 56,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'redirect-5',
    slug: 'community-forum',
    targetUrl: 'https://forum.thardesertphotography.com',
    description: 'Our community forum',
    category: 'community',
    active: false,
    clickCount: 124,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export default function RedirectsPage() {
  const [redirects, setRedirects] = useState<RedirectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingTempToken, setIsUsingTempToken] = useState(false);
  
  // Form state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<{
    _id?: string;
    slug: string;
    targetUrl: string;
    description: string;
    category: 'social' | 'community' | 'partner' | 'other';
    active: boolean;
  }>({
    slug: '',
    targetUrl: '',
    description: '',
    category: 'other',
    active: true,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch redirects
  const fetchRedirects = async () => {
    setIsLoading(true);
    setError(null);

    // Check if using temporary token
    const token = localStorage.getItem('tdp_token');
    if (token && token.startsWith('temp-token-')) {
      setIsUsingTempToken(true);
      setRedirects(mockRedirects);
      setIsLoading(false);
      return;
    }

    try {
      const response = await adminApi.getRedirects();

      if (response.success && response.data) {
        // Map the response data to match our interface
        const formattedRedirects = response.data.map((redirect) => ({
          ...redirect,
          createdAt: redirect.createdAt.toString(),
          updatedAt: redirect.updatedAt.toString(),
        }));
        setRedirects(formattedRedirects);
      } else {
        setError(response.message || 'Failed to load redirects');
      }
    } catch (err) {
      console.error('Error fetching redirects:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRedirects();
  }, []);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isUsingTempToken) {
      if (isEditing && formData._id) {
        // Update existing redirect in mock data
        setRedirects(
          redirects.map((redirect) =>
            redirect._id === formData._id
              ? {
                  ...redirect,
                  slug: formData.slug,
                  targetUrl: formData.targetUrl,
                  description: formData.description,
                  category: formData.category,
                  active: formData.active,
                  updatedAt: new Date().toISOString(),
                }
              : redirect
          )
        );
      } else {
        // Add new redirect to mock data
        const newRedirect: RedirectData = {
          _id: `redirect-${Date.now()}`,
          slug: formData.slug,
          targetUrl: formData.targetUrl,
          description: formData.description,
          category: formData.category,
          active: formData.active,
          clickCount: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        setRedirects([...redirects, newRedirect]);
      }
      
      // Reset form
      setFormData({
        slug: '',
        targetUrl: '',
        description: '',
        category: 'other',
        active: true,
      });
      setIsFormOpen(false);
      setIsEditing(false);
      return;
    }

    try {
      let response;
      
      if (isEditing && formData._id) {
        // Update existing redirect
        response = await adminApi.updateRedirect(formData._id, {
          slug: formData.slug,
          targetUrl: formData.targetUrl,
          description: formData.description,
          category: formData.category,
          active: formData.active,
        });
      } else {
        // Create new redirect
        response = await adminApi.createRedirect({
          slug: formData.slug,
          targetUrl: formData.targetUrl,
          description: formData.description,
          category: formData.category,
          active: formData.active,
        });
      }

      if (response.success) {
        fetchRedirects();
        setFormData({
          slug: '',
          targetUrl: '',
          description: '',
          category: 'other',
          active: true,
        });
        setIsFormOpen(false);
        setIsEditing(false);
      } else {
        setError(response.message || 'Failed to save redirect');
      }
    } catch (err) {
      console.error('Error saving redirect:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  // Handle edit
  const handleEdit = (redirect: RedirectData) => {
    setFormData({
      _id: redirect._id,
      slug: redirect.slug,
      targetUrl: redirect.targetUrl,
      description: redirect.description || '',
      category: redirect.category,
      active: redirect.active,
    });
    setIsEditing(true);
    setIsFormOpen(true);
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this redirect?')) {
      return;
    }

    setError(null);

    if (isUsingTempToken) {
      // Update mock data
      setRedirects(redirects.filter((redirect) => redirect._id !== id));
      return;
    }

    try {
      const response = await adminApi.deleteRedirect(id);

      if (response.success) {
        fetchRedirects();
      } else {
        setError(response.message || 'Failed to delete redirect');
      }
    } catch (err) {
      console.error('Error deleting redirect:', err);
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

  if (isLoading && redirects.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Redirects</h1>
        <button
          onClick={() => {
            setFormData({
              slug: '',
              targetUrl: '',
              description: '',
              category: 'other',
              active: true,
            });
            setIsEditing(false);
            setIsFormOpen(true);
          }}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add New Redirect
        </button>
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

      {/* Redirect Form */}
      {isFormOpen && (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">{isEditing ? 'Edit Redirect' : 'Add New Redirect'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  Slug <span className="text-red-500">*</span>
                </label>
                <input
                  id="slug"
                  name="slug"
                  type="text"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., instagram"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  This will be used in the URL: https://yourdomain.com/r/<strong>{formData.slug || 'slug'}</strong>
                </p>
              </div>
              <div>
                <label htmlFor="targetUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Target URL <span className="text-red-500">*</span>
                </label>
                <input
                  id="targetUrl"
                  name="targetUrl"
                  type="url"
                  value={formData.targetUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="social">Social Media</option>
                  <option value="community">Community</option>
                  <option value="partner">Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of this redirect"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="active"
                name="active"
                type="checkbox"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
                Active
              </label>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isEditing ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Redirects Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {redirects.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No redirects found. Click "Add New Redirect" to create one.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Slug
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Target URL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clicks
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {redirects.map((redirect) => (
                  <tr key={redirect._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{redirect.slug}</div>
                      <div className="text-xs text-gray-500">{redirect.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        <a href={redirect.targetUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {redirect.targetUrl}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full ${getCategoryColor(redirect.category)}`}>
                        {formatCategory(redirect.category)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full ${redirect.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {redirect.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {redirect.clickCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(redirect)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(redirect._id)}
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
  );
}

function getCategoryColor(category: string): string {
  switch (category) {
    case 'social':
      return 'bg-blue-100 text-blue-800';
    case 'community':
      return 'bg-purple-100 text-purple-800';
    case 'partner':
      return 'bg-green-100 text-green-800';
    case 'other':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function formatCategory(category: string): string {
  switch (category) {
    case 'social':
      return 'Social Media';
    case 'community':
      return 'Community';
    case 'partner':
      return 'Partner';
    case 'other':
      return 'Other';
    default:
      return category.charAt(0).toUpperCase() + category.slice(1);
  }
}
