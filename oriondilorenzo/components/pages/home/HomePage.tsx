'use client';
import type { EncodeDataAttributeCallback } from '@sanity/react-loader';
import Image from 'next/image';
import { createContext, useState } from 'react';
import type { Image as Img } from 'sanity';

import ModalContext from '@/app/contexts/ModalContext';
import Book from '@/components/pages/home/Book/Book';
import BgBlur from '@/components/ui/BgBlur';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import CloseButton from '@/components/ui/CloseButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { urlForImage } from '@/sanity/lib/utils';
import type { HomePagePayload, PhotoModalPayload } from '@/types';

import { Header } from './Header';

export interface HomePageProps {
  data: HomePagePayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

enum BookState {
  Hidden,
  Closed,
  Open,
  Opened,
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const [bookState, setBookState] = useState<BookState>(BookState.Hidden);
  const [modalState, setModalState] = useState<PhotoModalPayload>({
    open: false,
    gallery: [],
  });

  const closeModal = () => {
    setModalState({ open: false, gallery: [] });
  };

  const openModal = (gallery: Img[]) => {
    setModalState({ open: true, gallery });
  };

  let style =
    'h-full w-full flex flex-row justify-center items-center relative p-0';

  switch (bookState) {
    case BookState.Hidden:
      style += ' translate-y-[-12312312vw]';
      break;
    case BookState.Closed:
      style += ' animate-slide-out-book';
      break;
    case BookState.Opened:
    case BookState.Open:
      style += ' animate-in slide-in-from-bottom duration-500 ease-out';
      break;
  }

  const handleBookClick = () => {
    if (bookState === BookState.Open || bookState === BookState.Opened) {
      setBookState(BookState.Closed);
    } else if (bookState === BookState.Hidden) {
      setBookState(BookState.Open);
    } else if (bookState === BookState.Closed) {
      setBookState(BookState.Opened);
    }
  };

  const closeBook = () => {
    setBookState(BookState.Closed);
  };

  const timer = new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (bookState === BookState.Open) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });

  return (
    <div className="relative h-full w-full overflow-visible">
      {/* Header */}
      <Header
        projectOnClick={handleBookClick}
        resumeUrl={data?.resumeUrl || ''}
      />
      {bookState !== BookState.Hidden && (
        <BgBlur opened={bookState !== BookState.Closed} onClick={closeBook} />
      )}
      <div className={style}>
        <ModalContext.Provider value={openModal}>
          <Book
            data={data}
            encodeDataAttribute={encodeDataAttribute}
            timer={timer}
          />
        </ModalContext.Provider>
        <CloseButton onClick={closeBook} />
      </div>
      <Dialog open={modalState.open}>
        <DialogContent
          onClick={closeModal}
          className="flex w-[80vw] items-center justify-center border-2 lg:max-w-xl"
        >
          <DialogTitle className="sr-only">Project Photo Gallery</DialogTitle>
          <DialogDescription className="sr-only">
            Images from or relating to the project
          </DialogDescription>
          <GalleryCarousel gallery={modalState?.gallery || []} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const GalleryCarousel = (props: { gallery: any[] }) => {
  const { gallery } = props;
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {gallery?.map((image, index) => (
          <CarouselItem key={index}>
            <GalleryItem image={image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const GalleryItem = ({ image }) => {
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

  const galleryImgUrl =
    image?.photo &&
    urlForImage(image.photo)?.height(height).width(width).fit('clip').url();
  return (
    <div className="p-1">
      <Card className="border-0">
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <Image
            src={galleryImgUrl}
            alt={'Gallery image '}
            width={500}
            height={500}
            className="w-full"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
