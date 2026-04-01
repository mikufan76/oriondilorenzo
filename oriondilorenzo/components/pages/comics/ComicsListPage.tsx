'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/Card';
import { urlForImage } from '@/sanity/lib/utils';
import type { SanityComic } from '@/types';

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
    <div className="w-full px-4 py-8 md:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">Comics</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((comic) => (
          <Link key={comic._id} href={`/comics/${comic.slug}`}>
            <Card className="h-full cursor-pointer transition-transform hover:scale-105">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                  {comic.coverImage && (
                    <Image
                      src={urlForImage(comic.coverImage)?.url() || ''}
                      alt={comic.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </CardContent>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{comic.title}</h2>
                {comic.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {comic.description}
                  </p>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComicsListPage;
