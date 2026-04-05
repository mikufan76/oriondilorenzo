'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/Card';
import { urlForImage } from '@/sanity/lib/utils';
import type { SanityComic } from '@/types';
import HorizontalNavbar from '@/components/shared/ODNavbar';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';

export interface ComicsListPageProps {
  data: SanityComic[] | null;
}

export function ComicsListPage({ data }: ComicsListPageProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center text-lg text-muted-foreground">No comics available yet.</p>
      </div>
    );
  }

  return (
    <div id="comic-list" className="relative flex h-full w-full items-center justify-between overflow-hidden flex-col">
      <HorizontalNavbar />
      <div className="flex flex-col overflow-scroll justify-start items-center w-full h-full p-2 pt-10 sm:pt-0 sm:flex-row sm:flex-wrap sm:justify-center gap-4">
        {data.map((comic) => (
          <Link key={comic._id} href={`/comics/${comic.slug}`} className='hover:scale-110 transition-transform w-64 h-auto'>
            <div className="relative aspect-[3/4] rounded-t-lg  h-auto w-64">
              {comic.coverImage && (
                <Image
                  src={urlForImage(comic.coverImage)?.url() || ''}
                  alt={comic.title}
                  fill
                  className="object-contain w-full h-full"
                />
              )}
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComicsListPage;
