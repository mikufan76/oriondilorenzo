'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/Card';
import { urlForImage } from '@/sanity/lib/utils';
import type { SanityComic } from '@/types';
import HorizontalNavbar from '@/components/shared/ODNavbar';

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
      <div className="flex flex-wrap justify-center items-center w-full h-full p-2">
        {data.map((comic) => (
          <Link key={comic._id} href={`/comics/${comic.slug}`} className='hover:scale-110 transition-transform'>
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg w-64 h-auto">
              {comic.coverImage && (
                <Image
                  src={urlForImage(comic.coverImage)?.url() || ''}
                  alt={comic.title}
                  fill
                  className="object-contain w-64 h-auto"
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
