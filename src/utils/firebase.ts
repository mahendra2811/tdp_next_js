import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updatePassword,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged,
  User,
  setPersistence,
  browserLocalPersistence,
  onIdTokenChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { setCookie, deleteCookie } from '@/utils/cookies';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7L05Q2gYo-KHx3SlT8Y8I3dPzk9RUBsY',
  authDomain: 'tdp-next.firebaseapp.com',
  projectId: 'tdp-next',
  storageBucket: 'tdp-next.firebasestorage.app',
  messagingSenderId: '65598096390',
  appId: '1:65598096390:web:726b536a714c30b01a2f87',
  measurementId: 'G-0ZWMHBF0WK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics = null;

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize analytics only on client side
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);

  // Set persistence to local
  setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error('Error setting persistence:', error);
  });

  // Listen for token changes and store in cookie for middleware
  onIdTokenChanged(auth, async (user) => {
    if (user) {
      // Get the token
      const token = await user.getIdToken();
      // Store it in a cookie that expires in 7 days
      setCookie('firebase_token', token, { maxAge: 60 * 60 * 24 * 7 });
    } else {
      // Remove the cookie when user is signed out
      deleteCookie('firebase_token');
    }
  });
}

// Authentication functions
export const registerUser = async (email: string, password: string, displayName: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Update the user profile with display name
    await updateProfile(userCredential.user, { displayName });
    return { success: true, user: userCredential.user };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error registering user:', error);
    return { success: false, error: errorMessage };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error logging in:', error);
    return { success: false, error: errorMessage };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error logging out:', error);
    return { success: false, error: errorMessage };
  }
};

export const updateUserProfile = async (
  user: User,
  data: { displayName?: string; photoURL?: string }
) => {
  try {
    await updateProfile(user, data);
    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error updating profile:', error);
    return { success: false, error: errorMessage };
  }
};

export const updateUserEmail = async (user: User, newEmail: string, password: string) => {
  try {
    // Re-authenticate user before changing email
    const credential = EmailAuthProvider.credential(user.email!, password);
    await reauthenticateWithCredential(user, credential);

    // Update email
    await updateEmail(user, newEmail);
    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error updating email:', error);
    return { success: false, error: errorMessage };
  }
};

export const updateUserPassword = async (
  user: User,
  currentPassword: string,
  newPassword: string
) => {
  try {
    // Re-authenticate user before changing password
    const credential = EmailAuthProvider.credential(user.email!, currentPassword);
    await reauthenticateWithCredential(user, credential);

    // Update password
    await updatePassword(user, newPassword);
    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error updating password:', error);
    return { success: false, error: errorMessage };
  }
};

// Export auth instance and auth functions for auth context
export { auth, onAuthStateChanged, sendPasswordResetEmail };
export default app;
