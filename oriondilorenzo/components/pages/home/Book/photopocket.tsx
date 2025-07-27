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

export type PhotoPocketProps = {
  gallery: any[];
  className?: string;
};

export default function PhotoPocket(props: PhotoPocketProps) {
  const { gallery, className } = props;
  const modalContext = useContext<PhotoModalState>(ModalContext);

  if (!gallery || gallery.length === 0) {
    return <></>;
  }

  return (
    <div
      className={cn(
        className,
        'photo-pocket-back group relative h-3/4 w-full overflow-x-clip overflow-y-clip rounded-t-xl shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]',
      )}
    >
      <PhotoProvider>
        {gallery.map((image, index: number) => {
          const coverImgUrl = image?.photo && urlForImage(image.photo)?.url();

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

          return (
            <PhotoView key={index} src={coverImgUrl || ''}>
              <Image
                key={index}
                src={coverImgUrl || ''}
                alt={'Gallery image'}
                width={width}
                height={height}
                style={{ left: `${index * 20}px` }}
                placeholder="blur"
                blurDataURL={image?.photo?.lqip}
                className="animate-transform absolute bottom-0 ml-2 h-[50%] overflow-visible border-4 border-white bg-white shadow-md shadow-black/90 hover:translate-y-[-10px] hover:cursor-zoom-in"
              />
            </PhotoView>
          );
        })}
      </PhotoProvider>
      {/* <div className="photo-pocket absolute bottom-0 h-3/4 w-full overflow-visible shadow-[0_-2px_10px_2px_rgba(0,0,0,0.25)] transition-transform group-hover:translate-y-[10px] group-hover:scale-x-110 group-hover:scale-y-95 group-hover:duration-300"></div> */}
    </div>
  );
}
