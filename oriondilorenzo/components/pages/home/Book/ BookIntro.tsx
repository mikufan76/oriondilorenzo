import { Courier_Prime } from 'next/font/google';

import { CustomPortableText } from '@/components/shared/CustomPortableText';
import { DataTable } from '@/components/ui/DataTable';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';

import StickyLink from '../../../shared/StickyLink';

const overviewFont = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
});

export default function BookIntro({ overview, columns, showcaseProjects }) {
  return (
    <div
      id="page-wrapper"
      className="flex h-full w-full flex-col justify-between rounded-lg bg-[url('/smallpaper.webp')] bg-cover bg-center bg-no-repeat p-2 text-bg"
    >
      <div id="intro" className="h-1/3 w-full flex-none">
        <div className="h-min w-full lg:text-2xl">
          SITE UNDER CONSTRUCTION!
          <div className="flex h-[2em] w-5/6 flex-row lg:text-lg">
            <StickyLink
              url="mailto:contact@oriondilorenzo.com"
              title="Questions? Email contact@oriondilorenzo.com"
            />
          </div>
        </div>
        <div
          className={`h-min text-xs lg:p-2 lg:text-sm ${overviewFont.className}`}
        >
          <CustomPortableText value={overview.text}></CustomPortableText>
        </div>
      </div>
      <h3 className="h-min w-full text-center lg:text-2xl">
        Table of Contents
      </h3>
      <ScrollArea
        className={`h-full min-h-[30%] w-full shrink overflow-hidden shadow-inner`}
      >
        <DataTable
          variants={{ rowVariants: 'tableOfContents' }}
          columns={columns}
          data={showcaseProjects}
          showHeader={true}
        />
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}
