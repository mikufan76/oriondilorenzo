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
import type { HomePagePayload } from '@/types';

import { Header } from './Header';
import ModalContext from '@/app/contexts/ModalContext';

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
  const [modalState, setModalState] = useState<boolean>(false);

  const setModal = (state: boolean) => {
    setModalState(state);
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
        <ModalContext.Provider value={setModal}>
          <Book
            data={data}
            encodeDataAttribute={encodeDataAttribute}
            timer={timer}
          />
        </ModalContext.Provider>
        <Button
          variant={'outline'}
          className="absolute right-0 top-0 rounded bg-bg text-primary transition-colors hover:bg-primary hover:text-bg sm:right-1 sm:top-1 sm:text-2xl"
          onClick={closeBook}
        >
          X
        </Button>
      </div>
      <Dialog open={modalState}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
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
