# Thar Desert Photography

![Thar Desert Photography Logo](public/assets/Images/logo-TDP.png)

A Next.js website for Thar Desert Photography, offering desert safari, photography tours, and unforgettable experiences in the Thar Desert, Jaisalmer, Rajasthan.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Guide](#development-guide)
- [Multilingual Support](#multilingual-support)
- [Component Development](#component-development)
- [Google Tag Manager Implementation](#google-tag-manager-implementation)
- [SEO Optimization](#seo-optimization)
- [Performance Considerations](#performance-considerations)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

Thar Desert Photography is a tourism website that showcases the beauty of the Thar Desert in Rajasthan, India. The website offers information about various destinations, wildlife, and tour packages for visitors interested in exploring the desert landscape and its unique ecosystem.

The website is built with Next.js and features a responsive design, multilingual support (English and Hindi), and integrated analytics tracking.

## Features

- **Multilingual Support**: Complete English and Hindi language versions
- **Responsive Design**: Optimized for all device sizes
- **Tour Information**: Detailed information about various destinations and tour packages
- **Wildlife Sections**: Dedicated pages for birds, mammals, reptiles, and the Great Indian Bustard
- **Image Gallery**: Showcase of stunning desert photography
- **Booking System**: Forms for tour bookings and inquiries
- **Google Tag Manager**: Integrated analytics tracking
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.2.0)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Geist Sans and Geist Mono
- **Linting**: [Biome](https://biomejs.dev/)
- **Analytics**: Google Tag Manager
- **Deployment**: Configured for Netlify

## Project Structure

### Root Directory

```
TDP_nextJs/
├── public/                  # Static assets
├── src/                     # Source code
├── docs/                    # Documentation
├── .gitignore               # Git ignore file
├── biome.json               # Biome configuration
├── bun.lock                 # Bun lock file
├── components.json          # Components configuration
├── eslint.config.mjs        # ESLint configuration
├── netlify.toml             # Netlify deployment configuration
├── next.config.js           # Next.js configuration
├── package-lock.json        # npm lock file
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── README.md                # Project documentation
└── tsconfig.json            # TypeScript configuration
```

### Public Directory

The `public` directory contains static assets that are served directly by the web server.

```
public/
└── assets/
    └── Images/              # Image assets organized by category
        ├── about/           # About page images
        ├── birds/           # Bird species images
        ├── DNP/             # Desert National Park images
        ├── Home/            # Home page images
        ├── reptiles/        # Reptile species images
        └── team/            # Team member images
```

### Source Directory

The `src` directory contains all the application source code.

```
src/
├── app/                     # Next.js App Router pages
├── components/              # React components
├── constant/                # Content data
├── context/                 # React context providers
├── hooks/                   # Custom React hooks
├── lib/                     # Utility libraries
├── styles/                  # Global styles
└── utils/                   # Utility functions
```

### App Directory

The `app` directory uses Next.js App Router structure, with each subdirectory representing a route.

```
app/
├── ClientBody.tsx           # Client-side body component
├── globals.css              # Global CSS
├── layout.tsx               # Root layout component
├── page.tsx                 # Home page
├── about/                   # About page
├── birds/                   # Birds page
├── book-now/                # Booking page
├── contact/                 # Contact page
├── destination/             # Destinations parent page
│   ├── desert-national-park/# Desert National Park page
│   └── dhawa-doli/          # Dhawa Doli page
├── faq/                     # FAQ page
├── gallery/                 # Gallery page
├── gib/                     # Great Indian Bustard page
├── gtm-test/                # Google Tag Manager test page
├── image-debug/             # Image debugging page
├── jojari-river/            # Jojari River page
├── mammals/                 # Mammals page
├── privacy-policy/          # Privacy policy page
├── products/                # Products page
├── reptiles/                # Reptiles page
├── team/                    # Team page
└── terms-conditions/        # Terms and conditions page
```

### Components Directory

The `components` directory contains reusable React components organized by section.

```
components/
├── ImageGallery.tsx         # Image gallery component
├── ProductCard.tsx          # Product card component
├── ProductFormModal.tsx     # Product form modal component
├── about/                   # About page components
├── analytics/               # Analytics tracking components
├── birds/                   # Birds page components
├── booking/                 # Booking form components
├── common/                  # Common/shared components
├── contact/                 # Contact page components
├── desert-national-park/    # Desert National Park components
├── destination/             # Destination page components
├── dhawa-doli/              # Dhawa Doli components
├── gallery/                 # Gallery page components
├── gib/                     # Great Indian Bustard components
├── home/                    # Home page components
├── jojari-river/            # Jojari River components
├── layout/                  # Layout components (header, footer)
├── mammals/                 # Mammals page components
├── reptiles/                # Reptiles page components
├── team/                    # Team page components
└── ui/                      # UI components (buttons, inputs, etc.)
```

### Constants Directory

The `constant` directory contains content data in TypeScript files, with separate files for English and Hindi.

```
constant/
├── aboutInfo.ts             # About page content (English)
├── aboutInfoHindi.ts        # About page content (Hindi)
├── birdsInfo.ts             # Birds page content (English)
├── birdsInfoHindi.ts        # Birds page content (Hindi)
├── contactInfo.ts           # Contact page content (English)
├── contactInfoHindi.ts      # Contact page content (Hindi)
├── desertNationalParkInfo.ts# Desert National Park content (English)
├── desertNationalParkInfoHindi.ts # Desert National Park content (Hindi)
├── destinationInfo.ts       # Destinations page content (English)
├── destinationInfoHindi.ts  # Destinations page content (Hindi)
├── dhawaDoliInfo.ts         # Dhawa Doli content (English)
├── dhawaDoliInfoHindi.ts    # Dhawa Doli content (Hindi)
├── footerInfo.ts            # Footer content (English)
├── footerInfoHindi.ts       # Footer content (Hindi)
├── galleryInfo.ts           # Gallery page content (English)
├── galleryInfoHindi.ts      # Gallery page content (Hindi)
├── gibInfo.ts               # Great Indian Bustard content (English)
├── gibInfoHindi.ts          # Great Indian Bustard content (Hindi)
├── headerInfo.ts            # Header content (English)
├── headerInfoHindi.ts       # Header content (Hindi)
├── homeInfo.ts              # Home page content (English)
├── homeInfoHindi.ts         # Home page content (Hindi)
├── jojariRiverInfo.ts       # Jojari River content (English)
├── jojariRiverInfoHindi.ts  # Jojari River content (Hindi)
├── mammalsInfo.ts           # Mammals page content (English)
├── mammalsInfoHindi.ts      # Mammals page content (Hindi)
├── reptilesInfo.ts          # Reptiles page content (English)
├── reptilesInfoHindi.ts     # Reptiles page content (Hindi)
├── teamData.ts              # Team page content (English)
└── teamDataHindi.ts         # Team page content (Hindi)
```

### Context Directory

The `context` directory contains React context providers.

```
context/
├── GalleryContext.tsx       # Gallery context for image viewing
└── LanguageContext.tsx      # Language context for multilingual support
```

### Hooks Directory

The `hooks` directory contains custom React hooks.

```
hooks/
├── useClickOutside.ts       # Hook for detecting clicks outside an element
└── useGalleryImage.ts       # Hook for gallery image functionality
```

### Utils Directory

The `utils` directory contains utility functions.

```
utils/
├── analytics.ts             # Google Tag Manager analytics functions
├── dataLayerDebugger.ts     # Debugging tools for GTM dataLayer
└── seo.ts                   # SEO utility functions
```

### Key Files

#### Configuration Files

- `next.config.js`: Next.js configuration
- `biome.json`: Biome linter and formatter configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS
- `netlify.toml`: Netlify deployment configuration
- `tsconfig.json`: TypeScript configuration

#### Core Application Files

- `src/app/layout.tsx`: Root layout component with metadata, fonts, and providers
- `src/app/page.tsx`: Home page component
- `src/components/layout/Header.tsx`: Site header with navigation
- `src/components/layout/Footer.tsx`: Site footer
- `src/context/LanguageContext.tsx`: Language switching functionality
- `src/utils/analytics.ts`: Google Tag Manager integration

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or bun package manager
- Git

### Development Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/TDP_nextJs.git
   cd TDP_nextJs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Development Guide

This section provides guidelines and best practices for developing and maintaining the Thar Desert Photography website.

## Multilingual Support

The website supports English and Hindi languages. The implementation uses React Context API for language switching and persistence.

### Language Context

The language context is defined in `src/context/LanguageContext.tsx` and provides:

- Current language state (`'en'` or `'hi'`)
- `setLanguage` function to change the language
- `toggleLanguage` function to toggle between languages

### Content Organization

Content is stored in separate files with the following naming convention:

- English: `contentName.ts`
- Hindi: `contentNameHindi.ts`

Example:
```typescript
// src/constant/homeInfo.ts (English)
export const homeInfo = {
  hero: {
    title: "Explore the Thar Desert",
    subtitle: "Unforgettable photography tours in Rajasthan",
    // ...
  },
  // ...
};

// src/constant/homeInfoHindi.ts (Hindi)
export const homeInfoHindi = {
  hero: {
    title: "थार रेगिस्तान की खोज करें",
    subtitle: "राजस्थान में अविस्मरणीय फोटोग्राफी टूर",
    // ...
  },
  // ...
};
```

### Using Multilingual Content in Components

To use multilingual content in components:

```typescript
import { useLanguage } from '@/context/LanguageContext';
import { homeInfo } from '@/constant/homeInfo';
import { homeInfoHindi } from '@/constant/homeInfoHindi';

const MyComponent = () => {
  const { language } = useLanguage();
  
  // Select the appropriate content based on language
  const content = language === 'en' ? homeInfo : homeInfoHindi;
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
    </div>
  );
};
```

### Language Toggle Component

The `LanguageToggle` component in `src/components/common/LanguageToggle.tsx` provides a UI for users to switch between languages.

## Component Development

### Component Organization

Components are organized by feature or page section:

- `components/common/`: Shared components used across multiple pages
- `components/home/`: Components specific to the home page
- `components/birds/`: Components specific to the birds page
- etc.

### Component Structure

Follow these guidelines when creating new components:

1. Use TypeScript for type safety
2. Use functional components with hooks
3. Keep components focused on a single responsibility
4. Extract reusable logic into custom hooks
5. Use proper prop typing

Example component structure:

```typescript
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { sectionInfo } from '@/constant/sectionInfo';
import { sectionInfoHindi } from '@/constant/sectionInfoHindi';

interface SectionProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  variant = 'primary',
  className = '',
}) => {
  const { language } = useLanguage();
  const content = language === 'en' ? sectionInfo : sectionInfoHindi;
  
  return (
    <section className={`section ${variant} ${className}`}>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </section>
  );
};
```

## Google Tag Manager Implementation

This section explains how Google Tag Manager (GTM) has been implemented in the Thar Desert Photography website and how to use it for tracking user interactions and analytics.

### Overview

Google Tag Manager has been integrated into the website to track various user interactions and page views. The implementation includes:

1. GTM script in the head section of the website
2. Noscript iframe after the opening body tag
3. Utility functions for tracking events
4. Page view tracking
5. Form submission tracking

### Implementation Details

#### 1. GTM Container Setup

The GTM container ID `GTM-WXBP85DC` has been added to the website in the root layout file (`src/app/layout.tsx`). This includes:

- The GTM script in the head section
- The noscript iframe after the opening body tag
- DataLayer initialization

#### 2. Analytics Utility Functions

A set of utility functions has been created in `src/utils/analytics.ts` to make it easier to track events with Google Tag Manager:

- `trackEvent`: General function to push events to the dataLayer
- `trackPageView`: Track page views
- `trackButtonClick`: Track button clicks
- `trackFormSubmit`: Track form submissions
- `trackBooking`: Track booking completions

#### 3. Page View Tracking

A `PageViewTracker` component has been created in `src/components/analytics/PageViewTracker.tsx` to automatically track page views as users navigate through the website. This component is included in the root layout and doesn't render anything visible.

#### 4. Form Tracking

Form submissions are tracked in the following components:

- `BookingForm`: Tracks booking form submissions and completions
- `LeadForm`: Tracks lead inquiry form submissions

### How to Use

#### Tracking Page Views

Page views are automatically tracked by the `PageViewTracker` component. No additional code is needed.

#### Tracking Events

To track custom events, import the appropriate function from the analytics utility:

```typescript
import { trackEvent } from '@/utils/analytics';

// Track a custom event
trackEvent('event_name', {
  property1: 'value1',
  property2: 'value2'
});
```

#### Tracking Button Clicks

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

#### Tracking Form Submissions

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

### Google Tag Manager Configuration

To complete the setup, you need to configure your tags, triggers, and variables in the Google Tag Manager interface:

1. Log in to [Google Tag Manager](https://tagmanager.google.com/)
2. Select your container (`GTM-WXBP85DC`)
3. Create tags for each event you want to track (e.g., Google Analytics, Facebook Pixel)
4. Create triggers based on the events being pushed to the dataLayer
5. Test and publish your container

### Extending the Implementation

To track additional events:

1. Add new utility functions to `src/utils/analytics.ts` if needed
2. Import and use these functions in your components
3. Configure corresponding triggers and tags in the Google Tag Manager interface

### Additional Resources

- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Tag Manager Developer Guide](https://developers.google.com/tag-manager/devguide)

## SEO Optimization

### Metadata

Each page should have appropriate metadata defined in a `metadata.ts` file in its directory:

```typescript
// src/app/about/metadata.ts
import { createLanguageMetadata } from '@/utils/seo';

export const metadata = createLanguageMetadata({
  en: {
    title: 'About Us | Thar Desert Photography',
    description: 'Learn about our team and our passion for desert photography...',
    // ...
  },
  hi: {
    title: 'हमारे बारे में | थार रेगिस्तान फोटोग्राफी',
    description: 'हमारी टीम और रेगिस्तान फोटोग्राफी के लिए हमारे जुनून के बारे में जानें...',
    // ...
  }
});
```

### Image Optimization

Use Next.js Image component for optimized images:

```typescript
import Image from 'next/image';

<Image
  src="/assets/Images/hero.jpg"
  alt="Desert landscape"
  width={1200}
  height={600}
  priority={true}
/>
```

## Performance Considerations

### Code Splitting

Next.js handles code splitting automatically, but you can optimize further:

- Use dynamic imports for large components that aren't needed immediately
- Lazy load below-the-fold content

```typescript
import dynamic from 'next/dynamic';

const LazyGallerySection = dynamic(
  () => import('@/components/gallery/LazyGallerySection'),
  { loading: () => <p>Loading gallery...</p> }
);
```

### Image Optimization

- Use appropriate image formats (WebP when possible)
- Optimize image sizes
- Use responsive images with appropriate sizes
- Lazy load images below the fold

### Font Optimization

The project uses Next.js font optimization with the Geist font family:

```typescript
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
```

## Styling Guidelines

The project uses Tailwind CSS for styling.

### Tailwind CSS

- Use Tailwind utility classes for styling
- Use consistent spacing and sizing
- Follow the project's color scheme
- Use responsive classes for different screen sizes

Example:

```tsx
<div className="flex flex-col md:flex-row gap-4 p-6 bg-background text-foreground">
  <div className="w-full md:w-1/2">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-base">{description}</p>
  </div>
  <div className="w-full md:w-1/2">
    <Image src={imageSrc} alt={imageAlt} width={600} height={400} />
  </div>
</div>
```

### Custom Components

For complex UI components, use the components in the `components/ui/` directory:

- `Button.tsx`: Button component with variants
- `Input.tsx`: Input component
- `TextArea.tsx`: Text area component
- `Accordion.tsx`: Accordion component
- `Dialog.tsx`: Dialog/modal component

## Testing

### Manual Testing

Before submitting changes, manually test:

1. All affected pages in both English and Hindi
2. Responsive behavior on different screen sizes
3. Form submissions and interactions
4. Analytics tracking (using GTM debug mode)

## Deployment

The project is configured for deployment on Netlify with the `netlify.toml` configuration file.

### Build Process

1. Run linting and type checking:
   ```bash
   npm run lint
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. Test the production build locally:
   ```bash
   npm run start
   ```

### Deployment Process

1. Push changes to the main branch
2. Netlify will automatically deploy the changes

### Environment Variables

The following environment variables should be set in the Netlify dashboard:

- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager ID
- `NEXT_PUBLIC_SITE_URL`: Production site URL

## Contact

For any inquiries, please contact us at [contact@thardesertphotography.com](mailto:contact@thardesertphotography.com).
