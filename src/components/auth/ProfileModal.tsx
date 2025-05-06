'use client';

import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Phone, MapPin, Save, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Modal from '@/components/common/Modal';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'profile' | 'security';
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, initialTab = 'profile' }) => {
  const { user, userProfile, updateProfile, updateEmail, updatePassword, setUserProfile } =
    useAuth();

  // Form states
  const [activeTab, setActiveTab] = useState<'profile' | 'security'>(initialTab);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    displayName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    bio: '',
  });

  // Security form state
  const [securityForm, setSecurityForm] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Initialize form with user data
  useEffect(() => {
    if (!user) {
      onClose();
      return;
    }

    if (userProfile) {
      setProfileForm({
        displayName: userProfile.displayName || '',
        phoneNumber: userProfile.phoneNumber || '',
        address: userProfile.address || '',
        city: userProfile.city || '',
        state: userProfile.state || '',
        country: userProfile.country || '',
        pincode: userProfile.pincode || '',
        bio: userProfile.bio || '',
      });

      setSecurityForm({
        email: user.email || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  }, [user, userProfile, onClose]);

  // Handle profile form changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle security form changes
  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSecurityForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle profile form submission
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      // Update Firebase display name
      const result = await updateProfile({
        displayName: profileForm.displayName,
      });

      if (!result.success) {
        setErrorMessage(result.error || 'Failed to update profile');
        return;
      }

      // Update local profile data
      setUserProfile({
        ...userProfile,
        displayName: profileForm.displayName,
        phoneNumber: profileForm.phoneNumber,
        address: profileForm.address,
        city: profileForm.city,
        state: profileForm.state,
        country: profileForm.country,
        pincode: profileForm.pincode,
        bio: profileForm.bio,
      });

      setSuccessMessage('Profile updated successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrorMessage(errorMessage);
      console.error('Profile update error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle email update
  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      if (!securityForm.currentPassword) {
        setErrorMessage('Current password is required to update email');
        setIsLoading(false);
        return;
      }

      const result = await updateEmail(securityForm.email, securityForm.currentPassword);
      if (result.success) {
        setSuccessMessage('Email updated successfully');
        setSecurityForm((prev) => ({
          ...prev,
          currentPassword: '',
        }));
      } else {
        setErrorMessage(result.error || 'Failed to update email');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrorMessage(errorMessage);
      console.error('Email update error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password update
  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      if (!securityForm.currentPassword) {
        setErrorMessage('Current password is required');
        setIsLoading(false);
        return;
      }

      if (securityForm.newPassword.length < 6) {
        setErrorMessage('New password must be at least 6 characters');
        setIsLoading(false);
        return;
      }

      if (securityForm.newPassword !== securityForm.confirmPassword) {
        setErrorMessage('New passwords do not match');
        setIsLoading(false);
        return;
      }

      const result = await updatePassword(securityForm.currentPassword, securityForm.newPassword);
      if (result.success) {
        setSuccessMessage('Password updated successfully');
        setSecurityForm((prev) => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }));
      } else {
        setErrorMessage(result.error || 'Failed to update password');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrorMessage(errorMessage);
      console.error('Password update error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Your Profile">
      <div className=" overflow-y-auto px-2 text-gray-900 bg-white">
        {/* Tabs */}
        <div className="border-b border-gray-200   sticky  bg-white z-10 pt-2 pb-2">
          <nav className=" flex space-x-8">
            <button
              onClick={() => {
                setActiveTab('profile');
                setSuccessMessage(null);
                setErrorMessage(null);
              }}
              className={`${
                activeTab === 'profile'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Profile Information
            </button>
            <button
              onClick={() => {
                setActiveTab('security');
                setSuccessMessage(null);
                setErrorMessage(null);
              }}
              className={`${
                activeTab === 'security'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Security Settings
            </button>
          </nav>
        </div>

        {/* Success and Error Messages */}
        {successMessage && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center">
            <Save className="h-5 w-5 mr-2" />
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            {errorMessage}
          </div>
        )}

        {/* Profile Information Tab */}
        {activeTab === 'profile' && (
          <form onSubmit={handleProfileSubmit} className="space-y-10 px-3 py-2 pb-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="displayName"
                  className="block text-sm font-medium text-gray-900 mb-3"
                >
                  Full Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="displayName"
                    id="displayName"
                    value={profileForm.displayName}
                    onChange={handleProfileChange}
                    className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4  "
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-900 mb-3"
                >
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={profileForm.phoneNumber}
                    onChange={handleProfileChange}
                    className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-3">
                  Address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={profileForm.address}
                    onChange={handleProfileChange}
                    className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-3">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={profileForm.city}
                    onChange={handleProfileChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border text-gray-900 py-3 px-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="state" className="block text-sm font-medium text-gray-900 mb-3">
                  State
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={profileForm.state}
                    onChange={handleProfileChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border  text-gray-900 py-3 px-4"
                  />
                </div>
              </div>

              {/* <div className="sm:col-span-3">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-900 mb-3">
                  ZIP / Postal Code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pincode"
                    id="pincode"
                    value={profileForm.pincode}
                    onChange={handleProfileChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900 py-3 px-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-3">
                  Country
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={profileForm.country}
                    onChange={handleProfileChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900 py-3 px-4"
                  />
                </div>
              </div> */}

              <div className="sm:col-span-6">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-900 mb-3">
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={profileForm.bio}
                    onChange={handleProfileChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Security Settings Tab */}
        {activeTab === 'security' && (
          <div className="space-y-12 px-3 pb-8">
            {/* Email Update Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Update Email</h3>
              <form onSubmit={handleEmailUpdate} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-3">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={securityForm.email}
                      onChange={handleSecurityChange}
                      className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="currentPasswordEmail"
                    className="block text-sm font-medium text-gray-900 mb-3"
                  >
                    Current Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="currentPassword"
                      id="currentPasswordEmail"
                      value={securityForm.currentPassword}
                      onChange={handleSecurityChange}
                      className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    We need your current password to verify your identity.
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isLoading ? 'Updating...' : 'Update Email'}
                  </button>
                </div>
              </form>
            </div>

            {/* Password Update Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Change Password</h3>
              <form onSubmit={handlePasswordUpdate} className="space-y-6">
                <div>
                  <label
                    htmlFor="currentPasswordChange"
                    className="block text-sm font-medium text-gray-900 mb-3"
                  >
                    Current Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="currentPassword"
                      id="currentPasswordChange"
                      value={securityForm.currentPassword}
                      onChange={handleSecurityChange}
                      className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-900 mb-3"
                  >
                    New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      value={securityForm.newPassword}
                      onChange={handleSecurityChange}
                      className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Password must be at least 6 characters.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-900 mb-3"
                  >
                    Confirm New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={securityForm.confirmPassword}
                      onChange={handleSecurityChange}
                      className="pl-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 border rounded-md text-gray-900 py-3 px-4"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isLoading ? 'Updating...' : 'Change Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProfileModal;
