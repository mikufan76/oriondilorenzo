import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import LinksPage from '@/components/pages/links/LinksPage';
import { getLinksPage } from '@/sanity/loader/loadQuery';

export default async function IndexRoute() {
  const initial = await getLinksPage();

  if (!initial.data) {
    return redirect('/');
  }

  return <LinksPage data={initial.data} />;
}
