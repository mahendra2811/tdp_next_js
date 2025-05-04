# Thar Desert Photography

![Thar Desert Photography Logo](public/assets/Images/logo-TDP.png)

A Next.js website for Thar Desert Photography, offering desert safari, photography tours, and unforgettable experiences in the Thar Desert, Jaisalmer, Rajasthan.

## 🌵 Overview

Thar Desert Photography is a tourism website that showcases the beauty of the Thar Desert in Rajasthan, India. The website offers information about various destinations, wildlife, and tour packages for visitors interested in exploring the desert landscape and its unique ecosystem.

The website is built with Next.js and features a responsive design, multilingual support (English and Hindi), and integrated analytics tracking.

## ✨ Features

- **Multilingual Support**: Complete English and Hindi language versions
- **Responsive Design**: Optimized for all device sizes
- **Tour Information**: Detailed information about various destinations and tour packages
- **Wildlife Sections**: Dedicated pages for birds, mammals, reptiles, and the Great Indian Bustard
- **Image Gallery**: Showcase of stunning desert photography
- **Booking System**: Forms for tour bookings and inquiries
- **Google Tag Manager**: Integrated analytics tracking
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.2.0)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Geist Sans and Geist Mono
- **Linting**: [Biome](https://biomejs.dev/)
- **Analytics**: Google Tag Manager
- **Deployment**: Configured for Netlify

## 📁 Project Structure

```
TDP_nextJs/
├── public/                  # Static assets
│   └── assets/
│       └── Images/          # Image assets organized by category
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components organized by section
│   ├── constant/            # Content data in English and Hindi
│   ├── context/             # React context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── styles/              # Global styles
│   └── utils/               # Utility functions
├── docs/                    # Documentation
├── .gitignore               # Git ignore file
├── biome.json               # Biome configuration
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── README.md                # Project documentation
└── tsconfig.json            # TypeScript configuration
```

### Key Directories

- **app/**: Contains all the Next.js pages using the App Router
- **components/**: Reusable UI components organized by section (home, about, birds, etc.)
- **constant/**: Content data stored in TypeScript files, with separate files for English and Hindi
- **context/**: React context providers for language switching and gallery functionality
- **utils/**: Utility functions for analytics, SEO, and other features

## 🚀 Setup and Installation

### Prerequisites

- Node.js (v18 or later)
- npm or bun package manager

### Installation

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

## 💻 Development

### Available Scripts

- `npm run dev`: Starts the development server with Turbopack
- `npm run build`: Builds the application for production
- `npm run start`: Starts the production server
- `npm run lint`: Runs Biome linter and TypeScript type checking
- `npm run format`: Formats code using Biome

### Adding New Content

1. Add new content data in the appropriate file in the `src/constant/` directory
2. Create both English and Hindi versions of the content
3. Create or update components in the `src/components/` directory
4. Add or update the page in the `src/app/` directory

### Multilingual Support

The website supports English and Hindi languages. Content is stored in separate files with the following naming convention:

- English: `contentName.ts`
- Hindi: `contentNameHindi.ts`

The language context (`src/context/LanguageContext.tsx`) handles language switching and persistence.

## 📊 Analytics and Tracking

Google Tag Manager is integrated for analytics tracking. The implementation includes:

- GTM container setup in the root layout
- Utility functions for tracking events
- Automatic page view tracking
- Form submission tracking

For more details, see the [Google Tag Manager documentation](docs/google-tag-manager.md).

## 🌐 SEO

The website is optimized for search engines with:

- Dynamic metadata for each page
- Open Graph tags
- Structured data
- Multilingual support with hreflang tags
- Performance optimizations

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop computers

Tailwind CSS is used for responsive styling.

## 🚢 Deployment

The project is configured for deployment on Netlify with the `netlify.toml` configuration file.

To deploy:

1. Push your changes to GitHub
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any inquiries, please contact us at [contact@thardesertphotography.com](mailto:contact@thardesertphotography.com).
