/**
 * API utility functions for connecting to the backend
 */

// Type definitions for API data
interface ErrorItem {
  msg: string;
  param: string;
  location: string;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
  active: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface BookingData {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  country: string;
  otherCountry?: string;
  state?: string;
  district?: string;
  pincode?: string;
  checkInDate: string | Date;
  checkOutDate: string | Date;
  tourists: number;
  queries?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

interface LeadData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

interface TeamApplicationData {
  _id: string;
  name: string;
  mobile: string;
  email?: string;
  address: string;
  reason: string;
  extra?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

interface RedirectData {
  _id: string;
  slug: string;
  targetUrl: string;
  description?: string;
  category: 'social' | 'community' | 'partner' | 'other';
  active: boolean;
  clickCount: number;
  createdAt: Date;
  updatedAt: Date;
}

// Base URL for API requests
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// Default headers for API requests
const defaultHeaders = {
  'Content-Type': 'application/json',
};

// Interface for API response
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: ErrorItem[];
}

/**
 * Get auth token from local storage
 */
const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('tdp_token');
  }
  return null;
};

/**
 * Set auth token in local storage
 */
export const setToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('tdp_token', token);
  }
};

/**
 * Remove auth token from local storage
 */
export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('tdp_token');
  }
};

/**
 * Get auth headers
 */
const getAuthHeaders = (): HeadersInit => {
  const token = getToken();
  if (token) {
    return {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }
  return defaultHeaders;
};

/**
 * Generic API request function
 */
const apiRequest = async <T>(
  endpoint: string,
  method: string = 'GET',
  data?: Record<string, unknown>,
  requiresAuth: boolean = false
): Promise<ApiResponse<T>> => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = requiresAuth ? getAuthHeaders() : defaultHeaders;

    console.log(`API Request: ${method} ${endpoint}`);
    console.log('Requires Auth:', requiresAuth);
    
    if (requiresAuth) {
      console.log('Auth Token Present:', !!getToken());
    }

    const options: RequestInit = {
      method,
      headers,
      // Remove credentials: 'include' to work with wildcard CORS
    };

    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(data);
      console.log('Request Body:', JSON.stringify(data));
    }

    const response = await fetch(url, options);
    console.log(`API Response Status: ${response.status}`);

    const result = await response.json();
    console.log('API Response Data:', result);

    if (!response.ok) {
      console.log(`API Error: ${response.status} - ${result.message || 'Unknown error'}`);

      // Handle unauthorized error (token expired or invalid)
      if (response.status === 401 && requiresAuth) {
        console.log('Unauthorized access detected, removing token');
        removeToken();
        // Redirect to login page if on client side
        if (typeof window !== 'undefined') {
          // Check if we're in the admin section
          if (window.location.pathname.startsWith('/admin')) {
            console.log('Redirecting to admin login page');
            window.location.href = '/admin/login';
          } else {
            console.log('Redirecting to admin login page');
            window.location.href = '/admin/login';
          }
        }
      }

      return {
        success: false,
        message: result.message || 'API request failed',
        errors: result.errors,
      };
    }

    return result;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Network error';
    console.error('API Request Error:', errorMessage);
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

/**
 * API functions for bookings
 */
export const bookingApi = {
  create: (data: Omit<BookingData, '_id' | 'status' | 'createdAt' | 'updatedAt'>) =>
    apiRequest<BookingData>('/bookings', 'POST', data as Record<string, unknown>),
};

/**
 * API functions for leads
 */
export const leadApi = {
  create: (data: Omit<LeadData, '_id' | 'status' | 'createdAt' | 'updatedAt'>) =>
    apiRequest<LeadData>('/leads', 'POST', data as Record<string, unknown>),
};

/**
 * API functions for team applications
 */
export const teamApplicationApi = {
  create: (data: Omit<TeamApplicationData, '_id' | 'status' | 'createdAt' | 'updatedAt'>) =>
    apiRequest<TeamApplicationData>('/team-applications', 'POST', data as Record<string, unknown>),
};

/**
 * API functions for authentication
 */
export const authApi = {
  login: (credentials: { email: string; password: string }) =>
    apiRequest<{ token: string; user: UserData }>(
      '/auth/login',
      'POST',
      credentials as Record<string, unknown>
    ),

  getProfile: () => apiRequest<UserData>('/auth/me', 'GET', undefined, true),

  updateProfile: (data: Partial<Pick<UserData, 'name' | 'email'>>) =>
    apiRequest<UserData>('/auth/me', 'PUT', data as Record<string, unknown>, true),

  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    apiRequest<{ success: boolean }>(
      '/auth/change-password',
      'PUT',
      data as Record<string, unknown>,
      true
    ),
};

/**
 * API functions for admin operations
 */
export const adminApi = {
  // Bookings
  getBookings: () => apiRequest<BookingData[]>('/bookings', 'GET', undefined, true),
  getBooking: (id: string) => apiRequest<BookingData>(`/bookings/${id}`, 'GET', undefined, true),
  updateBookingStatus: (id: string, status: 'pending' | 'confirmed' | 'cancelled') =>
    apiRequest<BookingData>(
      `/bookings/${id}`,
      'PATCH',
      { status } as Record<string, unknown>,
      true
    ),
  deleteBooking: (id: string) =>
    apiRequest<{ success: boolean }>(`/bookings/${id}`, 'DELETE', undefined, true),

  // Leads
  getLeads: () => apiRequest<LeadData[]>('/leads', 'GET', undefined, true),
  getLead: (id: string) => apiRequest<LeadData>(`/leads/${id}`, 'GET', undefined, true),
  updateLeadStatus: (id: string, status: 'new' | 'contacted' | 'converted' | 'closed') =>
    apiRequest<LeadData>(`/leads/${id}`, 'PATCH', { status } as Record<string, unknown>, true),
  deleteLead: (id: string) =>
    apiRequest<{ success: boolean }>(`/leads/${id}`, 'DELETE', undefined, true),

  // Team Applications
  getTeamApplications: () =>
    apiRequest<TeamApplicationData[]>('/team-applications', 'GET', undefined, true),
  getTeamApplication: (id: string) =>
    apiRequest<TeamApplicationData>(`/team-applications/${id}`, 'GET', undefined, true),
  updateTeamApplicationStatus: (
    id: string,
    status: 'pending' | 'reviewed' | 'accepted' | 'rejected'
  ) =>
    apiRequest<TeamApplicationData>(
      `/team-applications/${id}`,
      'PATCH',
      { status } as Record<string, unknown>,
      true
    ),
  deleteTeamApplication: (id: string) =>
    apiRequest<{ success: boolean }>(`/team-applications/${id}`, 'DELETE', undefined, true),

  // Redirects
  getRedirects: () => apiRequest<RedirectData[]>('/redirects', 'GET', undefined, true),
  getRedirect: (id: string) => apiRequest<RedirectData>(`/redirects/${id}`, 'GET', undefined, true),
  createRedirect: (data: Omit<RedirectData, '_id' | 'clickCount' | 'createdAt' | 'updatedAt'>) =>
    apiRequest<RedirectData>('/redirects', 'POST', data as Record<string, unknown>, true),
  updateRedirect: (
    id: string,
    data: Partial<Omit<RedirectData, '_id' | 'createdAt' | 'updatedAt'>>
  ) => apiRequest<RedirectData>(`/redirects/${id}`, 'PUT', data as Record<string, unknown>, true),
  deleteRedirect: (id: string) =>
    apiRequest<{ success: boolean }>(`/redirects/${id}`, 'DELETE', undefined, true),

  // Users
  getUsers: () => apiRequest<UserData[]>('/auth/users', 'GET', undefined, true),
  createUser: (
    data: Omit<UserData, '_id' | 'lastLogin' | 'createdAt' | 'updatedAt'> & { password: string }
  ) => apiRequest<UserData>('/auth/register', 'POST', data as Record<string, unknown>, true),
  updateUser: (id: string, data: Partial<Omit<UserData, '_id' | 'createdAt' | 'updatedAt'>>) =>
    apiRequest<UserData>(`/auth/users/${id}`, 'PUT', data as Record<string, unknown>, true),
  deleteUser: (id: string) =>
    apiRequest<{ success: boolean }>(`/auth/users/${id}`, 'DELETE', undefined, true),
};

// Export all API functions
export default {
  bookingApi,
  leadApi,
  teamApplicationApi,
  authApi,
  adminApi,
};
