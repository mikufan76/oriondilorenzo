'use client';
import ModalContext from '@/app/contexts/ModalContext';
import ImageBox from '@/components/shared/ImageBox';
import { cn, urlForImage } from '@/sanity/lib/utils';
import { loadProject } from '@/sanity/loader/loadQuery';
import { PhotoModalState } from '@/types';
import { Images } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';

export type PhotoPocketProps = {
  gallery: any[];
  className?: string;
  onMouseEvent: (event: boolean) => void;
};

export default function PhotoPocket(props: PhotoPocketProps) {
  const { gallery, className, onMouseEvent } = props;
  const modalContext = useContext<PhotoModalState>(ModalContext);

  return (
    <button
      onPointerEnter={() => onMouseEvent(false)}
      onPointerLeave={() => onMouseEvent(true)}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        modalContext({ open: true, gallery });
      }}
      className={cn(
        className,
        'group relative h-3/4 w-full overflow-x-clip overflow-y-clip rounded-t-xl bg-paper shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]',
      )}
    >
      <div className="h-full w-full overflow-y-visible transition-transform duration-300 ease-in-out group-hover:translate-y-[-20px] group-hover:scale-105">
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
                style={{ transform: `rotate(${index * 3}deg)` }}
                className="absolute bottom-0 ml-2 h-[90%] w-[90%] overflow-visible border-4 border-white shadow-md shadow-black/90"
              />
            );
          })}
      </div>
      <div className="photo-pocket absolute bottom-0 h-3/4 w-full overflow-visible shadow-[0_-2px_10px_2px_rgba(0,0,0,0.25)] transition-transform group-hover:translate-y-[10px] group-hover:scale-x-110 group-hover:scale-y-95 group-hover:duration-300"></div>
    </button>
  );
}
