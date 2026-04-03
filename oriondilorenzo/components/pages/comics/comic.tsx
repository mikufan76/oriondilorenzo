'use client';

import { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

import { urlForImage } from '@/sanity/lib/utils';
import type { SanityComic } from '@/types';
import ComicSidebar from './ComicSidebar';
import HorizontalNavbar from '@/components/shared/ODNavbar';

export interface ComicProps {
  data: SanityComic;
  allComics?: SanityComic[];
}

export function Comic({ data, allComics = [] }: ComicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 400, height: 533 });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobilePortrait = () => {
      // Check if it's a mobile device AND in portrait mode (height > width)
      const isMobile = window.innerWidth < 768; // iPad is typically > 768px
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobilePortrait(isMobile && isPortrait);

      // Calculate responsive dimensions
      let width = 400;
      let height = 533;

      if (window.innerWidth < 480) {
        // Small mobile: use 90% of viewport width with constraints
        width = Math.min(Math.max(window.innerWidth * 0.9, data.minSize || 300), data.maxSize || 1000);
      } else if (window.innerWidth < 768) {
        // Mobile/tablet: use 85% of viewport width in portrait, 70% in landscape
        const percentage = window.innerHeight > window.innerWidth ? 0.85 : 0.7;
        width = Math.min(Math.max(window.innerWidth * percentage, data.minSize || 300), data.maxSize || 1000);
      } else {
        // Desktop: use default 522px
        width = 522;
      }

      height = Math.round(width / (data.aspectRatio || 0.75));

      // Ensure height doesn't exceed viewport height with some padding
      const maxHeight = window.innerHeight - 40; // 40px padding for safety
      if (height > maxHeight) {
        height = maxHeight;
        width = Math.round(height * (data.aspectRatio || 0.75));
      }

      setDimensions({ width, height });
    };

    checkMobilePortrait();
    window.addEventListener('resize', checkMobilePortrait);
    window.addEventListener('orientationchange', checkMobilePortrait);

    return () => {
      window.removeEventListener('resize', checkMobilePortrait);
      window.removeEventListener('orientationchange', checkMobilePortrait);
    };
  }, [data.aspectRatio, data.minSize, data.maxSize]);

  // Convert Sanity images to URLs
  const pageImages = data.pages.map((page) => {
    const imageUrl = urlForImage(page.image)?.url();
    return {
      url: imageUrl,
    };
  });

  return (
    <div id="comic-container" className="relative flex h-full w-full items-center justify-center overflow-hidden flex-col">
      <div className='absolute top-0 w-full h-[10%] border-2 border-red'>
        <HorizontalNavbar />
      </div>
      <ComicSidebar
        allComics={allComics}
        currentComicId={data._id}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpen={() => setSidebarOpen(true)}
      />

      {/* Main Content */}
      <div
        ref={containerRef}
        className="relative flex w-auto h-[90%] items-center justify-center border-blue border-2"
      >
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          minWidth={data.minSize || 300}
          maxWidth={data.maxSize || 1000}
          minHeight={Math.round((data.minSize || 300) / (data.aspectRatio || 0.75))}
          maxHeight={Math.round((data.maxSize || 1000) / (data.aspectRatio || 0.75))}
          size="stretch"
          showCover={data.showCover !== false}
          flippingTime={data.flippingTime || 1000}
          usePortrait={isMobilePortrait}
          mobileScrollSupport={data.mobileScrollSupport !== false}
          style={{}}
          className=""
          startPage={0}
          autoSize={true}
          maxShadowOpacity={1}
          showPageCorners={true}
          disableFlipByClick={false}
          useMouseEvents={true}
          swipeDistance={10}
          clickEventForward={false}
          drawShadow={true}
          startZIndex={0}
        >
          {pageImages.map((page, index) => (
            <div key={index} className="h-full w-full bg-white">
              {page.url && (
                <img
                  src={page.url}
                  alt={`Page ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default Comic;
