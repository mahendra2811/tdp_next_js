import { Metadata } from 'next';

type LanguageMetadata = {
  en: Metadata;
  hi: Metadata;
};

/**
 * Creates language-specific metadata for SEO
 * @param metadata Object containing metadata for each language
 * @returns Metadata object
 */
export function createLanguageMetadata(metadata: LanguageMetadata): Metadata {
  // Base metadata that applies to all languages
  const baseMetadata: Metadata = {
    // Common properties
    robots: 'index, follow',
    // Add other common metadata here
  };

  // Create alternate links for each language
  const alternates = {
    languages: {
      en: '/',
      hi: '/',
    },
  };

  // Combine base metadata with language-specific metadata
  return {
    ...baseMetadata,
    alternates,
    // We'll use English as the default metadata
    // The actual language-specific content will be handled client-side
    ...metadata.en,
  };
}

/**
 * Example usage:
 *
 * export const metadata = createLanguageMetadata({
 *   en: {
 *     title: 'My Website',
 *     description: 'Welcome to my website',
 *   },
 *   hi: {
 *     title: 'मेरी वेबसाइट',
 *     description: 'मेरी वेबसाइट पर आपका स्वागत है',
 *   },
 * });
 */
