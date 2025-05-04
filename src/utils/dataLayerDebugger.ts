/**
 * DataLayer Debugger Utility
 *
 * This file provides utility functions to help debug Google Tag Manager dataLayer events
 * in the browser console. It's meant to be used during development and testing.
 */

/**
 * Initialize the dataLayer debugger
 * This function should be called in the browser console to start debugging
 */
export function initDataLayerDebugger() {
  if (typeof window === 'undefined') return;

  // Make sure dataLayer exists
  window.dataLayer = window.dataLayer || [];

  // Store the original push method
  const originalPush = window.dataLayer.push;

  // Override the push method to log events
  window.dataLayer.push = function (...args) {
    // Call the original push method
    const result = originalPush.apply(this, args);

    // Log the event
    console.group('📊 GTM dataLayer Event');
    console.log('Event:', args[0]?.event || 'No event name');
    console.log('Data:', args[0]);
    console.log('Timestamp:', new Date().toISOString());
    console.groupEnd();

    return result;
  };

  console.log('✅ GTM dataLayer debugger initialized');
  console.log('📊 All dataLayer events will be logged to the console');
}

/**
 * Get the current dataLayer state
 * This function can be called in the browser console to see the current dataLayer state
 */
export function getDataLayerState() {
  if (typeof window === 'undefined') return null;

  if (!window.dataLayer) {
    console.warn('⚠️ dataLayer is not initialized');
    return null;
  }

  console.group('📊 GTM dataLayer State');
  console.log('Events count:', window.dataLayer.length);
  console.log('Full dataLayer:', window.dataLayer);
  console.groupEnd();

  return window.dataLayer;
}

/**
 * Push a test event to the dataLayer
 * This function can be called in the browser console to test the dataLayer
 */
export function pushTestEvent(eventName = 'test_event', data = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const eventData = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...data,
  };

  window.dataLayer.push(eventData);

  console.log('✅ Test event pushed to dataLayer:', eventData);

  return eventData;
}

// Add to window object for easy access in browser console
if (typeof window !== 'undefined') {
  // @ts-expect-error - Adding custom debug property to window
  window.gtmDebug = {
    init: initDataLayerDebugger,
    getState: getDataLayerState,
    pushTestEvent: pushTestEvent,
  };
}
