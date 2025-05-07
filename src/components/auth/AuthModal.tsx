'use client';

import React, { useState } from 'react';
import { User, LogIn, Mail, Lock, UserPlus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Modal from '@/components/common/Modal';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const { login, register, error, clearError } = useAuth();

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateForm = () => {
    setFormError(null);

    if (!email.trim()) {
      setFormError('Email is required');
      return false;
    }

    if (!password.trim()) {
      setFormError('Password is required');
      return false;
    }

    if (mode === 'signup') {
      if (!displayName.trim()) {
        setFormError('Name is required');
        return false;
      }

      if (password.length < 6) {
        setFormError('Password must be at least 6 characters');
        return false;
      }

      if (password !== confirmPassword) {
        setFormError('Passwords do not match');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setFormError(null);
    setSuccessMessage(null);

    try {
      if (mode === 'login') {
        const result = await login(email, password);
        if (result.success) {
          setSuccessMessage('Login successful!');
          setTimeout(() => {
            onClose();
          }, 1500);
        } else {
          setFormError(result.error || 'Login failed. Please try again.');
        }
      } else {
        const result = await register(email, password, displayName);
        if (result.success) {
          setSuccessMessage('Account created successfully! You can now log in.');
          setTimeout(() => {
            setMode('login');
            setPassword('');
            setConfirmPassword('');
          }, 1500);
        } else {
          setFormError(result.error || 'Registration failed. Please try again.');
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setFormError(errorMessage);
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    clearError();
    setFormError(null);
    setSuccessMessage(null);
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setDisplayName('');
    setFormError(null);
    setSuccessMessage(null);
    clearError();
  };

  // Reset form when modal is closed
  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={mode === 'login' ? 'Sign in to your account' : 'Create a new account'}
    >
      {(formError || error) && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {formError || error}
        </div>
      )}

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="displayName"
                name="displayName"
                type="text"
                autoComplete="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
        </div>

        {mode === 'signup' && (
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
        )}

        {mode === 'login' && (
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </button>
            </div>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {mode === 'login' ? (
                <LogIn className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
              ) : (
                <UserPlus className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
              )}
            </span>
            {isLoading ? 'Processing...' : mode === 'login' ? 'Sign in' : 'Sign up'}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={toggleMode}
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default AuthModal;
