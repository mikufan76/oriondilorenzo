import { draftMode } from 'next/headers';

import { loadComic, loadAllComics } from '@/sanity/loader/loadQuery';
import ComicPreview from '@/components/pages/comics/ComicPreview';
import Comic from '@/components/pages/comics/comic';

export const revalidate = 60;

interface Params {
  slug: string;
}

export const metadata = {
  title: 'Comic',
  description: 'View comic flipbook.',
};

export default async function ComicRoute({ params }: { params: Params }) {
  const initial = await loadComic(params.slug);
  const allComicsData = await loadAllComics();

  if (draftMode().isEnabled) {
    return <ComicPreview initial={initial} slug={params.slug} />;
  }

  if (!initial.data) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center">Comic not found.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Comic data={initial.data} allComics={allComicsData.data || []} />
    </div>
  );
}
