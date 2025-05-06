/**
 * Utility functions for handling cookies
 */

// Set a cookie with the given name, value, and options
export function setCookie(name: string, value: string, options: { maxAge?: number } = {}) {
  if (typeof document === 'undefined') return;

  const cookieOptions = [];
  
  // Add max age if provided
  if (options.maxAge) {
    cookieOptions.push(`max-age=${options.maxAge}`);
  }
  
  // Add path
  cookieOptions.push('path=/');
  
  // Create the cookie string
  const cookieString = `${name}=${encodeURIComponent(value)}; ${cookieOptions.join('; ')}`;
  
  // Set the cookie
  document.cookie = cookieString;
}

// Get a cookie by name
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    
    // Check if this cookie starts with the name we're looking for
    if (cookie.startsWith(name + '=')) {
      // Return the cookie value
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  
  // Cookie not found
  return null;
}

// Delete a cookie by name
export function deleteCookie(name: string) {
  if (typeof document === 'undefined') return;
  
  // Set the cookie with an expiration date in the past
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}