'use client';

import { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

import { urlForImage } from '@/sanity/lib/utils';
import type { SanityComic } from '@/types';
import ComicSidebar from './ComicSidebar';
import HorizontalNavbar, { MobileHorizontalNavbar } from '@/components/shared/ODNavbar';

export interface ComicProps {
  data: SanityComic;
  allComics?: SanityComic[];
}

export function Comic({ data, allComics = [] }: ComicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const pageWidth = ((data?.pages[0]?.image?.aspectRatio) as any)?.width || 0;
  const pageHeight = ((data?.pages[0]?.image?.aspectRatio) as any)?.height || 0;
  const [dimensions, setDimensions] = useState({ width: pageWidth, height: pageHeight });
  const aspectRatio = (pageWidth * 2) / pageHeight || 0.75
  // console.log(JSON.stringify(data.pages[0]))

  useEffect(() => {
    const checkMobile = () => {
      // Check if it's a mobile device AND in portrait mode (height > width)
      const isMobile = window.innerWidth < 768; // iPad is typically > 768px
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobilePortrait(isMobile && isPortrait)
      setIsMobileLandscape(!isPortrait && window.innerHeight < 500)

    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);

    };
  }, [aspectRatio]);

  // Convert Sanity images to URLs
  const pageImages = data.pages.map((page) => {
    const imageUrl = urlForImage(page.image)?.url();
    return {
      url: imageUrl,
    };
  });

  return (
    <div id="comic-wrapper" className="relative h-full w-full flex justify-between items-center"

      style={isMobileLandscape ? { flexDirection: "row" } : { flexDirection: "column" }}
    >
      {isMobileLandscape ? <MobileHorizontalNavbar /> : <HorizontalNavbar />}
      {/* Main Content */}
      <div id="comic-container" className='flex items-center w-auto h-5/6 max-w-[98%] max-h-full pb-4' style={!isMobilePortrait ? { aspectRatio: aspectRatio } : {}}>

        <HTMLFlipBook
          ref={containerRef}
          key={isMobilePortrait ? 'portrait' : isMobileLandscape ? 'mobile-landscape' : 'landscape'}
          width={dimensions.width}
          height={dimensions.height}
          minWidth={isMobileLandscape? 100 : 300}
          maxWidth={data.maxSize || 2000}
          minHeight={200}
          maxHeight={2000}
          size="stretch"
          showCover={data.showCover !== false}
          flippingTime={data.flippingTime || 1000}
          usePortrait={!isMobileLandscape}
          mobileScrollSupport={data.mobileScrollSupport !== false}
          style={{}}
          className=" "
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
