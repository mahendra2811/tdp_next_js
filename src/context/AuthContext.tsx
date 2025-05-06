'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User, 
  onAuthStateChanged,
  UserCredential
} from 'firebase/auth';
import { 
  auth, 
  loginUser as firebaseLogin,
  registerUser as firebaseRegister,
  logoutUser as firebaseLogout,
  updateUserProfile,
  updateUserEmail,
  updateUserPassword
} from '@/utils/firebase';

// Define the shape of the context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  userProfile: UserProfile | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, displayName: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<{ success: boolean; error?: string }>;
  updateProfile: (data: { displayName?: string; photoURL?: string }) => Promise<{ success: boolean; error?: string }>;
  updateEmail: (newEmail: string, password: string) => Promise<{ success: boolean; error?: string }>;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  setUserProfile: (profile: UserProfile) => void;
  clearError: () => void;
}

// Define user profile type
export interface UserProfile {
  displayName?: string;
  photoURL?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  bio?: string;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // Initialize user profile with data from Firebase user
        setUserProfile({
          displayName: user.displayName || undefined,
          photoURL: user.photoURL || undefined,
          email: user.email || undefined,
          phoneNumber: user.phoneNumber || undefined,
        });
        
        // Here you would typically fetch additional user data from your database
        // For example: fetchUserProfile(user.uid).then(profile => setUserProfile({...}))
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  // Clear error
  const clearError = () => setError(null);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    clearError();
    try {
      const result = await firebaseLogin(email, password);
      if (!result.success) {
        setError(result.error || 'Failed to login');
        return { success: false, error: result.error };
      }
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, displayName: string) => {
    setLoading(true);
    clearError();
    try {
      const result = await firebaseRegister(email, password, displayName);
      if (!result.success) {
        setError(result.error || 'Failed to register');
        return { success: false, error: result.error };
      }
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    clearError();
    try {
      const result = await firebaseLogout();
      if (!result.success) {
        setError(result.error || 'Failed to logout');
        return { success: false, error: result.error };
      }
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Update profile function
  const updateProfile = async (data: { displayName?: string; photoURL?: string }) => {
    setLoading(true);
    clearError();
    try {
      if (!user) {
        const errorMessage = 'User not authenticated';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }
      
      const result = await updateUserProfile(user, data);
      if (!result.success) {
        setError(result.error || 'Failed to update profile');
        return { success: false, error: result.error };
      }
      
      // Update local state
      setUserProfile(prev => prev ? { ...prev, ...data } : null);
      
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Update email function
  const updateEmail = async (newEmail: string, password: string) => {
    setLoading(true);
    clearError();
    try {
      if (!user) {
        const errorMessage = 'User not authenticated';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }
      
      const result = await updateUserEmail(user, newEmail, password);
      if (!result.success) {
        setError(result.error || 'Failed to update email');
        return { success: false, error: result.error };
      }
      
      // Update local state
      setUserProfile(prev => prev ? { ...prev, email: newEmail } : null);
      
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Update password function
  const updatePassword = async (currentPassword: string, newPassword: string) => {
    setLoading(true);
    clearError();
    try {
      if (!user) {
        const errorMessage = 'User not authenticated';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }
      
      const result = await updateUserPassword(user, currentPassword, newPassword);
      if (!result.success) {
        setError(result.error || 'Failed to update password');
        return { success: false, error: result.error };
      }
      
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Create the value object
  const value = {
    user,
    loading,
    error,
    userProfile,
    login,
    register,
    logout,
    updateProfile,
    updateEmail,
    updatePassword,
    setUserProfile,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};