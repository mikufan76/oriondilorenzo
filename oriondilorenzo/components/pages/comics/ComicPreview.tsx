'use client';

import { type QueryResponseInitial } from '@sanity/react-loader';

import { comicBySlugQuery, allComicsQuery } from '@/sanity/lib/queries';
import { useQuery } from '@/sanity/loader/useQuery';
import type { SanityComic } from '@/types';

import Comic from './comic';

type Props = {
  initial: QueryResponseInitial<SanityComic | null>;
  slug: string;
};

export default function ComicPreview(props: Props) {
  const { initial, slug } = props;
  const { data } = useQuery<SanityComic | null>(comicBySlugQuery, { slug }, { initial });
  const { data: allComicsData } = useQuery<SanityComic[]>(allComicsQuery);

  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center">Please start editing your Comic document to see the preview!</p>
      </div>
    );
  }

  return <Comic data={data} allComics={allComicsData || []} />;
}
