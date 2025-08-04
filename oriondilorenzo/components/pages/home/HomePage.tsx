'use client';
import type { EncodeDataAttributeCallback } from '@sanity/react-loader';
import Image from 'next/image';
import { createContext, useState } from 'react';

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
        <Book
          data={data}
          encodeDataAttribute={encodeDataAttribute}
          timer={timer}
        />
        <CloseButton onClick={closeBook} />
      </div>
    </div>
  );
}

export default HomePage;
