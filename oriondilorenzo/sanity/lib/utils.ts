import createImageUrlBuilder from '@sanity/image-url';
import { type Image } from 'sanity';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { dataset, projectId } from '@/sanity/lib/api';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto('format').fit('max');
};

export function urlForOpenGraphImage(image: Image | undefined) {
  return urlForImage(image)?.width(1200).height(627).fit('crop').url();
}

export const urlForLogo = (source: Image | undefined) => {
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imageBuilder?.image(source);
};

export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'project':
      return slug ? `/projects/${slug}` : undefined;
    default:
      console.warn('Invalid document type:', documentType);
      return undefined;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function noop() {
  return undefined;
}

/**
 Returns a random integer between min (inclusive) and max (inclusive)
 */
export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomArrayItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
