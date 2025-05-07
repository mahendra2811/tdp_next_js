import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines if an image path is a gallery image that should have modal functionality
 * @param path Image path
 * @returns Boolean indicating if the image should have modal functionality
 */
export function isGalleryImage(path: string): boolean {
  // Check if the path contains specific gallery indicators
  const galleryIndicators = [
    '/gallery/',
    'gallery-',
    '/mammals/',
    '/birds/',
    '/reptiles/',
    '/Dhawa/',
    'DDWS-',
    '/about/self-',
    '/team/',
    'other-',
    'others-',
    'place-',
    '/Home/gallery-',
  ];

  // Exclude hero images, banners, logos, etc.
  const excludedIndicators = [
    'hero-',
    'banner',
    'Banner',
    'logo',
    'Home-banner',
    'contact-home',
    'hero-destination',
    'hero-gallery',
  ];

  // Exclude images used as backgrounds or in cards
  const excludedPatterns = [/card-bg/i, /background/i, /bg-/i, /icon/i, /logo/i];

  return (
    // Must match at least one gallery indicator
    galleryIndicators.some((indicator) => path.includes(indicator)) &&
    // Must not match any excluded indicator
    !excludedIndicators.some((indicator) => path.includes(indicator)) &&
    // Must not match any excluded pattern
    !excludedPatterns.some((pattern) => pattern.test(path))
  );
}

/**
 * Gets the high-quality version of an image path
 * @param path Image thumbnail path
 * @returns Path to the high-quality version
 */
export function getHighQualityImagePath(path: string): string {
  // If the path already points to a high-quality image, return it
  if (
    path.includes('/gallery/') ||
    path.includes('/Dhawa/') ||
    path.includes('/mammals/') ||
    path.includes('/birds/') ||
    path.includes('/reptiles/') ||
    path.includes('/about/')
  ) {
    return path;
  }

  // For other images, try to find the high-quality version in the appropriate directory
  const filename = path.split('/').pop();
  if (!filename) return path;

  // Map thumbnail images to their high-quality counterparts based on naming patterns
  if (filename.startsWith('m-gallery-')) {
    // Map m-gallery-1.jpg to gallery/gallery-xx.JPG
    const number = filename.replace('m-gallery-', '').split('.')[0];

    // Try to map to corresponding gallery image
    // For example: m-gallery-2.jpg → /gallery/gallery-32.JPG
    // This is an approximation - adjust the mapping based on your actual file structure
    const galleryNumber = parseInt(number) + 30; // Assuming a pattern in your numbering
    return `/assets/Images/gallery/gallery-${galleryNumber}.JPG`;
  }

  // Handle other thumbnail patterns
  if (path.includes('/Home/') && filename.startsWith('gallery-')) {
    // Map Home/gallery-1.JPG to gallery/gallery-xx.JPG for better quality
    return path.replace('/Home/', '/gallery/');
  }

  // For images in the root Images directory that might have high-quality versions in subdirectories
  if (path.match(/\/assets\/Images\/[^\/]+\.(jpg|jpeg|JPG|JPEG|png|PNG)$/)) {
    // Check if it's a thumbnail by file size indicator in name
    if (filename.match(/^(m-|thumb-|small-)/)) {
      // Try to find corresponding high-quality version by removing the prefix
      const highQualityName = filename.replace(/^(m-|thumb-|small-)/, '');

      // Construct path to potential high-quality version
      const directory = path.substring(0, path.lastIndexOf('/'));
      return `${directory}/${highQualityName}`;
    }
  }

  // For other images, return the original path
  return path;
}
