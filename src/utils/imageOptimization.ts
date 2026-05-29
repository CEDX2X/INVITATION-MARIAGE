/**
 * Image Optimization Utilities
 * Adds compression parameters to Firebase Storage URLs
 */

export function optimizeFirebaseImageUrl(
  url: string,
  options: {
    width?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  } = {}
): string {
  if (!url || !url.includes('firebasestorage')) {
    return url;
  }

  const { width = 800, quality = 75, format = 'webp' } = options;
  
  // Add optimization parameters using Firebase's dynamic image resize service
  // Format: add these params to get resized images
  const params = new URLSearchParams();
  
  if (width) {
    params.append('w', String(width));
  }
  
  params.append('q', String(quality));
  
  // Firebase supports webp, jpg, png
  if (format) {
    params.append('f', format);
  }
  
  // Check if URL already has query params
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
}

/**
 * Preload critical images for faster rendering
 */
export function preloadImage(src: string): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(baseUrl: string, widths: number[] = [400, 800, 1200]): string {
  if (!baseUrl.includes('firebasestorage')) {
    return baseUrl;
  }
  
  return widths
    .map((width) => {
      const optimized = optimizeFirebaseImageUrl(baseUrl, { width, quality: 75 });
      return `${optimized} ${width}w`;
    })
    .join(', ');
}
