'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { urlForImage } from '@/sanity/lib/utils';
import type { SanityComic } from '@/types';
import { Button } from '@/components/ui/Button';

interface ComicSidebarProps {
  allComics: SanityComic[];
  currentComicId: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function ComicSidebar({
  allComics,
  currentComicId,
  isOpen,
  onClose,
  onOpen,
}: ComicSidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`absolute left-0 top-0 h-full bg-black text-primary border-r border-gray-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-40 ${
          isOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          className="absolute top-0 right-0 p-2"
        >
          <ChevronLeft size={20} />
        </Button>

        {/* Sidebar Content */}
        <div className="h-full pt-12 pb-4 overflow-y-auto flex flex-col">
          <h2 className="px-4 py-2 font-semibold text-lg">Comics</h2>
          <nav className="flex-1 px-2 space-y-1">
            {allComics.map((comic) => (
              <Link
                key={comic._id}
                href={`/comics/${comic.slug}`}
                onClick={onClose}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  comic._id === currentComicId
                    ? 'bg-blue-100 text-blue-900 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {comic.coverImage && (
                    <img
                      src={urlForImage(comic.coverImage)?.url()}
                      alt={comic.title}
                      className="w-8 h-10 object-cover rounded"
                    />
                  )}
                  <span className="text-sm truncate">{comic.title}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Open Sidebar Button */}
      {!isOpen && (
        <Button variant={"default"}
          onClick={onOpen}
          className="absolute left-0 top-0 p-2 z-40"
        >
          <ChevronRight size={20} />
        </Button>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/20 z-30"
        />
      )}
    </>
  );
}
