'use client';
import { Images } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';

import ModalContext from '@/app/contexts/ModalContext';
import ImageBox from '@/components/shared/ImageBox';
import { cn, urlForImage } from '@/sanity/lib/utils';
import { loadProject } from '@/sanity/loader/loadQuery';
import { PhotoModalState } from '@/types';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SATURATION = 30;
const BRIGHTNESS_BASE = 80;
const BG_SHADE_OFFSET = 20;
const IMAGE_X_OFFSET = 20;
const IMAGE_Y_OFFSET = 10;

export type PhotoPocketProps = {
  gallery: any[];
  className?: string;
  pageNumber: number;
};

export default function PhotoPocket(props: PhotoPocketProps) {
  const { gallery, className, pageNumber } = props;

  if (!gallery || gallery.length === 0) {
    return <></>;
  }



  const hue = (pageNumber * 30) % 360;

  return (
    <div
      style={{
        background: `hsl(${hue} ${SATURATION} ${BRIGHTNESS_BASE - BG_SHADE_OFFSET})`,
      }}
      className={cn(
        className,
        'relative h-3/4 w-full overflow-x-clip overflow-y-clip rounded-t-xl shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]',
      )}
    >
      <PhotoProvider className="relative h-full w-full">
        {gallery.map((image, index: number) => {
          const coverImgUrl =
            image?.photo &&
            urlForImage(image.photo)
              ?.maxWidth(500)
              ?.fit('max')
              ?.maxHeight(500)
              ?.dpr(1)
              ?.url();

          const aspectRatio = image.photo.aspectRatio as number;
          let width;
          let height;
          if (aspectRatio > 1) {
            width = Math.round(500 * aspectRatio);
            height = 500;
          } else {
            width = 500;
            height = Math.round(500 * aspectRatio);
          }

          const length = gallery.length;
          const position = length - index;

          const orientation =
            pageNumber % 2 === 0
              ? { left: index * IMAGE_X_OFFSET }
              : { right: -index * IMAGE_X_OFFSET };
          return (
            <div key={index} className="group">
              <PhotoView
                key={index}
                render={() => (
                  <Image
                    key={index}
                    src={coverImgUrl || ''}
                    alt={'Gallery image'}
                    width={width}
                    height={height}
                  />
                )}
              >
                <Image
                  key={index}
                  src={coverImgUrl || ''}
                  alt={'Gallery image'}
                  width={width}
                  height={height}
                  style={{
                    ...orientation,
                    bottom: `${position * IMAGE_Y_OFFSET}px`,
                  }}
                  placeholder="blur"
                  blurDataURL={image?.photo?.lqip}
                  className={`animate-transform absolute h-auto w-[90%] overflow-visible border-4 border-white bg-white shadow-md shadow-black/90 transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px] group-hover:cursor-zoom-in`}
                />
              </PhotoView>
            </div>
          );
        })}
      </PhotoProvider>
      <svg
        viewBox="0 0 10 10 "
        height="40%"
        preserveAspectRatio="none"
        style={{
          transform: pageNumber % 2 === 0 ? 'scaleX(-1)' : '',
        }}
        className="pointer-events-none absolute bottom-0 left-0 aspect-square w-full overflow-visible shadow-sm"
      >
        <polygon
          points="0,10 10,10, 10,0"
          style={{
            fill: `hsl(${hue} ${SATURATION} ${BRIGHTNESS_BASE - 10})`,
          }}
        />
      </svg>
      {/* <div className="photo-pocket absolute bottom-0 h-3/4 w-full overflow-visible shadow-[0_-2px_10px_2px_rgba(0,0,0,0.25)] transition-transform group-hover:translate-y-[10px] group-hover:scale-x-110 group-hover:scale-y-95 group-hover:duration-300"></div> */}
    </div>
  );
}
