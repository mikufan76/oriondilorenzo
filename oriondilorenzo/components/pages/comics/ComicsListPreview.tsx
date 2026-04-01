'use client';

import { type QueryResponseInitial } from '@sanity/react-loader';

import { allComicsQuery } from '@/sanity/lib/queries';
import { useQuery } from '@/sanity/loader/useQuery';
import type { SanityComic } from '@/types';

import { ComicsListPage } from './ComicsListPage';

type Props = {
  initial: QueryResponseInitial<SanityComic[] | null>;
};

export default function ComicsListPreview(props: Props) {
  const { initial } = props;
  const { data } = useQuery<SanityComic[] | null>(allComicsQuery, {}, { initial });

  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center">No comics available. Please start creating comics in your Sanity Studio!</p>
      </div>
    );
  }

  return <ComicsListPage data={data} />;
}
