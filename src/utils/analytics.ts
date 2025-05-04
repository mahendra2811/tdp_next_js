/**
 * Google Tag Manager utility functions
 */

// Type definition for GTM events
interface GTMEvent {
  event: string;
  [key: string]: string | number | boolean | object | undefined;
}

/**
 * Push an event to the dataLayer
 * @param event The event name
 * @param properties Additional properties to include with the event
 */
export const trackEvent = (
  event: string,
  properties: Record<string, string | number | boolean | object | undefined> = {}
): void => {
  // Make sure dataLayer exists
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];

    // Push the event to the dataLayer
    window.dataLayer.push({
      event,
      ...properties,
    });
  }
};

/**
 * Track a page view
 * @param path The page path
 * @param title The page title
 * @param properties Additional properties to include with the event
 */
export const trackPageView = (
  path: string,
  title: string,
  properties: Record<string, string | number | boolean | object | undefined> = {}
): void => {
  trackEvent('page_view', {
    page_path: path,
    page_title: title,
    ...properties,
  });
};

/**
 * Track a button click
 * @param buttonName The name of the button
 * @param properties Additional properties to include with the event
 */
export const trackButtonClick = (
  buttonName: string,
  properties: Record<string, string | number | boolean | object | undefined> = {}
): void => {
  trackEvent('button_click', {
    button_name: buttonName,
    ...properties,
  });
};

/**
 * Track a form submission
 * @param formName The name of the form
 * @param properties Additional properties to include with the event
 */
export const trackFormSubmit = (
  formName: string,
  properties: Record<string, string | number | boolean | object | undefined> = {}
): void => {
  trackEvent('form_submit', {
    form_name: formName,
    ...properties,
  });
};

/**
 * Track a booking
 * @param bookingId The booking ID
 * @param packageName The package name
 * @param amount The booking amount
 * @param properties Additional properties to include with the event
 */
export const trackBooking = (
  bookingId: string,
  packageName: string,
  amount: number,
  properties: Record<string, string | number | boolean | object | undefined> = {}
): void => {
  trackEvent('booking_completed', {
    booking_id: bookingId,
    package_name: packageName,
    amount,
    ...properties,
  });
};

// Add TypeScript declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}
