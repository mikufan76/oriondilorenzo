'use client';
import type { EncodeDataAttributeCallback } from '@sanity/react-loader';
import { createContext, useState } from 'react';

import Book from '@/components/pages/home/Book/Book';
import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';

import type { HomePagePayload, PhotoModalPayload } from '@/types';

import { Header } from './Header';
import ModalContext from '@/app/contexts/ModalContext';
import CloseButton from '@/components/ui/CloseButton';

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

  const openModal = (gallery: any[]) => {
    setModalState({ open: true, gallery });
  };

  let style =
    'h-screen w-screen flex flex-row justify-center items-center relative overflow-hidden p-0';

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
    <div className="h-screen w-screen overflow-hidden">
      {/* Header */}
      <Header projectOnClick={handleBookClick} />
      {bookState && <BgBlur bookState={bookState} onClick={closeBook} />}
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
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent onClick={closeModal}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

{
  /* <Carousel opts={{ loop: true, align: 'center' }}>
            <CarouselContent className="text-primary">
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */
}

const BgBlur = ({ bookState, onClick }) => {
  const animation =
    bookState !== BookState.Closed
      ? 'animate-in fade-in duration-500 ease-out'
      : 'animate-custom-fade ';
  return (
    <div
      onClick={onClick}
      className={`absolute h-screen w-screen backdrop-blur-lg ${animation}`}
    ></div>
  );
};

export default HomePage;
