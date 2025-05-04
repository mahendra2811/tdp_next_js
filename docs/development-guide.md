# Thar Desert Photography - Development Guide

This document provides guidelines and best practices for developing and maintaining the Thar Desert Photography website.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Multilingual Support](#multilingual-support)
4. [Component Development](#component-development)
5. [Analytics Implementation](#analytics-implementation)
6. [SEO Optimization](#seo-optimization)
7. [Performance Considerations](#performance-considerations)
8. [Styling Guidelines](#styling-guidelines)
9. [Testing](#testing)
10. [Deployment](#deployment)

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

## Project Structure

The project follows a modular structure organized by feature. For a detailed overview of the project structure, see [Project Structure Documentation](./project-structure.md).

Key directories:

- `src/app/`: Next.js App Router pages
- `src/components/`: React components organized by section
- `src/constant/`: Content data in English and Hindi
- `src/context/`: React context providers
- `src/utils/`: Utility functions

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

## Analytics Implementation

The website uses Google Tag Manager (GTM) for analytics tracking. For detailed information, see [Google Tag Manager Documentation](./google-tag-manager.md).

### Key Analytics Files

- `src/app/layout.tsx`: GTM script initialization
- `src/utils/analytics.ts`: Utility functions for tracking events
- `src/components/analytics/PageViewTracker.tsx`: Automatic page view tracking

### Tracking Events

To track custom events:

```typescript
import { trackEvent, trackButtonClick, trackFormSubmit } from '@/utils/analytics';

// Track a general event
trackEvent('event_name', {
  property1: 'value1',
  property2: 'value2'
});

// Track a button click
trackButtonClick('button_name', {
  page: 'home',
  section: 'hero'
});

// Track a form submission
trackFormSubmit('form_name', {
  form_field1: formData.field1,
  form_field2: formData.field2
});
```

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