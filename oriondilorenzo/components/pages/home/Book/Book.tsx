'use client';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import { Coming_Soon, Courier_Prime } from 'next/font/google';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { use, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { urlForImage } from '@/sanity/lib/utils';
import type { HomePagePayload } from '@/types';

import BookIntro from './ BookIntro';
import Project from './Project';

const bookHeaderFont = Coming_Soon({
  subsets: ['latin'],
  weight: ['400'],
});

const paragraphFont = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
});

export interface BookProps {
  data: HomePagePayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
  timer: Promise<boolean>;
}

export default function Book(props: BookProps) {
  const { data, encodeDataAttribute, timer } = props;
  const { overview = [], showcaseProjects = [], cover } = data ?? {};
  showcaseProjects.forEach((project, index) => (project.page = index + 2));
  const book = useRef(null) as any;
  const coverImgUrl =
    cover && urlForImage(cover)?.height(700).width(500).fit('crop').url();

  const [useMouseEvents, setUseMouseEvents] = useState(true);

  timer.then((result) => {
    if (book.current && result) {
      const pageFlip = book.current.pageFlip();
      if (pageFlip.getCurrentPageIndex() === 0) {
        pageFlip.flip(1);
      }
    }
  });

  const hideMouse = (event: boolean) => {
    if (event !== useMouseEvents) {
      setUseMouseEvents(event);
    }
  };

  const columns = [
    {
      accessorKey: 'icon',
      cell: ({ row }) => {
        const icon = row.getValue('icon');
        const imageUrl =
          icon && urlForImage(icon)?.height(20).width(20).fit('crop').url();
        return <Image src={imageUrl} width={20} height={20} alt={''} />;
      },
      header: '',
    },
    {
      accessorKey: 'title',
      header: 'Project',
    },

    {
      accessorKey: 'page',
      cell: ({ row }) => {
        return (
          <div className="flex w-full flex-row items-center justify-center">
            <div
              className="z-50 h-[30px] w-[30px] cursor-pointer rounded border-2 border-bg text-center transition-colors hover:bg-primary hover:text-brown"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the row click event
                let page = row.getValue('page'); // Access the page number
                const pageFlip = book.current.pageFlip();
                if (pageFlip.getOrientation() === 'landscape') {
                  page = page % 2 === 0 ? page - 1 : page;
                }

                if (page > 1) {
                  book.current.pageFlip().flip(page);
                }
              }}
            >
              {row.getValue('page')}
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div
      className={`flex h-full min-h-[400] w-full min-w-[300] max-w-[1200px] items-center justify-center rounded-lg sm:h-5/6 sm:w-2/3 ${bookHeaderFont.className}`}
    >
      <HTMLFlipBook
        ref={book}
        width={500}
        height={700}
        style={{}}
        className={''}
        size={'stretch'}
        startPage={0}
        maxWidth={1000}
        maxHeight={1000}
        minWidth={250}
        minHeight={350}
        drawShadow={false}
        flippingTime={800}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={useMouseEvents}
        swipeDistance={30}
        showPageCorners={false}
        disableFlipByClick={true}
      >
        {/* front cover */}
        <div className="page h-full w-full rounded-xl bg-brown">
          {coverImgUrl && (
            <Image
              className="m-auto h-full w-full overflow-hidden p-1"
              width={500}
              height={300}
              src={coverImgUrl}
              alt={''}
            />
          )}
        </div>
        {/* PAGE 1 */}
        <div className="page h-full w-full bg-brown p-2">
          <BookIntro
            overview={overview}
            columns={columns}
            showcaseProjects={showcaseProjects}
          />
        </div>
        {/* PROJECT POSTS */}
        {showcaseProjects.map((project) => {
          return (
            <div
              className="page relative h-full w-full border-0 bg-[url('/paper.png')] bg-cover bg-center bg-no-repeat p-2"
              key={project.slug}
            >
              <Project showcaseProject={project} useMouseEvents={hideMouse} />
            </div>
          );
        })}

        {/* back cover */}
        <div className="page h-full w-full rounded-xl bg-brown">
            <Image
              className="m-auto h-full w-full overflow-hidden p-1"
              width={500}
              height={300}
              src={'/backcover.png'}
              alt={''}
            />
        </div>
      </HTMLFlipBook>
    </div>
  );
}
