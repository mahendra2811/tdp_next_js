import { useMemo } from 'react';
import { isGalleryImage, getHighQualityImagePath } from '@/lib/utils';

/**
 * Hook to determine if an image should be treated as a gallery image
 * and to get its high-quality version if applicable
 */
export function useGalleryImage(src: string, alt: string) {
  return useMemo(() => {
    // Determine if this image should be treated as a gallery image
    const shouldOpenInModal = isGalleryImage(src);

    // Get high-quality version path if this is a gallery image
    const highQualitySrc = shouldOpenInModal ? getHighQualityImagePath(src) : src;

    // Check if the high-quality source is different from the original
    const hasHighQualityVersion = highQualitySrc !== src;

    return {
      shouldOpenInModal,
      highQualitySrc,
      hasHighQualityVersion,
      image: {
        src,
        alt,
        highQualitySrc: hasHighQualityVersion ? highQualitySrc : undefined,
      },
    };
  }, [src, alt]);
}

export default useGalleryImage;
