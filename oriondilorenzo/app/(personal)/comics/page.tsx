import { draftMode } from 'next/headers';

import { loadAllComics } from '@/sanity/loader/loadQuery';
import ComicsListPreview from '@/components/pages/comics/ComicsListPreview';
import { ComicsListPage } from '@/components/pages/comics/ComicsListPage';

export const revalidate = 60;

export const metadata = {
  title: 'Comics',
  description: 'Browse all comic books.',
};

export default async function ComicsRoute() {
  const initial = await loadAllComics();

  if (draftMode().isEnabled) {
    return <ComicsListPreview initial={initial} />;
  }

  return <ComicsListPage data={initial.data} />;
}
