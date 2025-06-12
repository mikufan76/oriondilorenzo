'use client';
import ImageBox from '@/components/shared/ImageBox';
import { cn, urlForImage } from '@/sanity/lib/utils';
import { loadProject } from '@/sanity/loader/loadQuery';
import { Images } from 'lucide-react';
import Image from 'next/image';

export type PhotoPocketProps = {
  gallery: any[];
  className?: string;
  onMouseEvent: (event: boolean) => void;
};

export default function PhotoPocket(props: PhotoPocketProps) {
  const { gallery, className, onMouseEvent } = props;
  return (
    <>
      <button
        onPointerEnter={() => onMouseEvent(false)}
        onPointerLeave={() => onMouseEvent(true)}
        className={cn(
          className,
          'relative h-3/4 w-full rounded-t-xl bg-paper shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] overflow-y-hidden',
        )}
      >
        <div></div>
        {gallery.length > 1 &&
          gallery.map((image, index: number) => {
            const coverImgUrl =
              image?.photo &&
              urlForImage(image.photo)
                ?.height(700)
                .width(500)
                .fit('crop')
                .url();
            return (
              <Image
                key={index}
                src={coverImgUrl || ''}
                alt={'Gallery image'}
                width={500}
                height={300}
                style={{ transform: `rotate(${index *3  }deg)` }}
                className="absolute bottom-0 mx-2 h-[90%] w-[90%] border-4 border-white shadow-md shadow-black/90"
              />
            );
          })}
        <div className="photo-pocket absolute bottom-0 h-3/4 w-full shadow-[0_-2px_10px_2px_rgba(0,0,0,0.25)]"></div>
      </button>
    </>
  );
}
