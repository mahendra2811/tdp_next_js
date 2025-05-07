# Google Tag Manager Implementation

This document explains how Google Tag Manager (GTM) has been implemented in the Thar Desert Photography website and how to use it for tracking user interactions and analytics.

## Overview

Google Tag Manager has been integrated into the website to track various user interactions and page views. The implementation includes:

1. GTM script in the head section of the website
2. Noscript iframe after the opening body tag
3. Utility functions for tracking events
4. Page view tracking
5. Form submission tracking

## Implementation Details

### 1. GTM Container Setup

The GTM container ID `GTM-WXBP85DC` has been added to the website in the root layout file (`src/app/layout.tsx`). This includes:

- The GTM script in the head section
- The noscript iframe after the opening body tag
- DataLayer initialization

### 2. Analytics Utility Functions

A set of utility functions has been created in `src/utils/analytics.ts` to make it easier to track events with Google Tag Manager:

- `trackEvent`: General function to push events to the dataLayer
- `trackPageView`: Track page views
- `trackButtonClick`: Track button clicks
- `trackFormSubmit`: Track form submissions
- `trackBooking`: Track booking completions

### 3. Page View Tracking

A `PageViewTracker` component has been created in `src/components/analytics/PageViewTracker.tsx` to automatically track page views as users navigate through the website. This component is included in the root layout and doesn't render anything visible.

### 4. Form Tracking

Form submissions are tracked in the following components:

- `BookingForm`: Tracks booking form submissions and completions
- `LeadForm`: Tracks lead inquiry form submissions

## How to Use

### Tracking Page Views

Page views are automatically tracked by the `PageViewTracker` component. No additional code is needed.

### Tracking Events

To track custom events, import the appropriate function from the analytics utility:

```typescript
import { trackEvent } from '@/utils/analytics';

// Track a custom event
trackEvent('event_name', {
  property1: 'value1',
  property2: 'value2'
});
```

### Tracking Button Clicks

To track button clicks:

```typescript
import { trackButtonClick } from '@/utils/analytics';

// In your click handler
const handleClick = () => {
  trackButtonClick('button_name', {
    page: 'home',
    section: 'hero'
  });
  
  // Rest of your click handler code
};
```

### Tracking Form Submissions

To track form submissions:

```typescript
import { trackFormSubmit } from '@/utils/analytics';

// In your form submit handler
const handleSubmit = (e) => {
  e.preventDefault();
  
  trackFormSubmit('form_name', {
    // Form properties
    form_field1: formData.field1,
    form_field2: formData.field2
  });
  
  // Rest of your form submission code
};
```

## Google Tag Manager Configuration

To complete the setup, you need to configure your tags, triggers, and variables in the Google Tag Manager interface:

1. Log in to [Google Tag Manager](https://tagmanager.google.com/)
2. Select your container (`GTM-WXBP85DC`)
3. Create tags for each event you want to track (e.g., Google Analytics, Facebook Pixel)
4. Create triggers based on the events being pushed to the dataLayer
5. Test and publish your container

## Extending the Implementation

To track additional events:

1. Add new utility functions to `src/utils/analytics.ts` if needed
2. Import and use these functions in your components
3. Configure corresponding triggers and tags in the Google Tag Manager interface

## Additional Resources

- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Tag Manager Developer Guide](https://developers.google.com/tag-manager/devguide)