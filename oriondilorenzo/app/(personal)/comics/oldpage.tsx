'use client';

import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

export default function IndexRoute() {
  const pageNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <HTMLFlipBook
        className={''}
        style={{}}
        startPage={0}
        size={'fixed'}
        width={522}
        height={806}
        minWidth={522}
        maxWidth={522}
        minHeight={806}
        maxHeight={806}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={1}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={10}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pageNumbers.map((pageNumber) => {
          return (
            <div className="h-full w-full bg-white" key={pageNumber}>
              <Image
                src={`/exposure-therapy/${pageNumber}.png`}
                alt=""
                width={522}
                height={806}
              />
            </div>
          );
        })}
        <div className='bg-white'>

        </div>
      </HTMLFlipBook>
    </div>
  );
}
