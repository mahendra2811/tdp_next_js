# Thar Desert Photography - Project Structure

This document provides a detailed overview of the project structure for the Thar Desert Photography website.

## Root Directory

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

## Public Directory

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

## Source Directory

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

## Documentation Directory

The `docs` directory contains project documentation.

```
docs/
├── google-tag-manager.md    # Google Tag Manager implementation documentation
└── project-structure.md     # This document
```

## Key Files

### Configuration Files

- `next.config.js`: Next.js configuration
- `biome.json`: Biome linter and formatter configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS
- `netlify.toml`: Netlify deployment configuration
- `tsconfig.json`: TypeScript configuration

### Core Application Files

- `src/app/layout.tsx`: Root layout component with metadata, fonts, and providers
- `src/app/page.tsx`: Home page component
- `src/components/layout/Header.tsx`: Site header with navigation
- `src/components/layout/Footer.tsx`: Site footer
- `src/context/LanguageContext.tsx`: Language switching functionality
- `src/utils/analytics.ts`: Google Tag Manager integration