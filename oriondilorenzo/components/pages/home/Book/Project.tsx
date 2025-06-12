import Image from 'next/image';
import { PortableText } from 'next-sanity';

import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import { urlForImage } from '@/sanity/lib/utils';
import project from '@/sanity/schemas/documents/project';
import { ShowcaseProject } from '@/types';
import { Courier_Prime } from 'next/font/google';
import { Londrina_Solid } from 'next/font/google';

import PhotoPocket from './photopocket';
import { Button } from '@/components/ui/Button';

const bodyFont = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const titleFont = Londrina_Solid({
  subsets: ['latin'],
  weight: ['400', '900'],
});

export default function Project(props: {
  showcaseProject: ShowcaseProject;
  useMouseEvents: (event: boolean) => void;
}) {
  const { coverImage, overview, slug, gallery, projectLinks, title } =
    props.showcaseProject;
  const useMouseEvents = props.useMouseEvents;
  const coverImgUrl =
    coverImage &&
    urlForImage(coverImage)?.height(300).width(500).fit('crop').url();
  return (
    project && (
      <div className="relative flex h-full w-full flex-col items-center justify-between gap-y-[2%] p-2">
        <CoverImage coverImage={coverImage} />
        <div className="flex h-2/3 w-full flex-1 flex-row pt-2">
          <TextArea title={title || ''} overview={overview || ''} />
          <InteractArea
            gallery={gallery}
            useMouseEvents={useMouseEvents}
            links={projectLinks}
          />
        </div>
      </div>
    )
  );
}

const CoverImage = ({ coverImage }) => {
  const coverImgUrl =
    coverImage &&
    urlForImage(coverImage)?.height(300).width(500).fit('crop').url();

  return (
    coverImgUrl && (
      <Image
        className="h-1/3 w-5/6 overflow-hidden border-2 border-white"
        width={500}
        height={300}
        src={coverImgUrl}
        alt={''}
      />
    )
  );
};

const PostTitle = ({ title }: { title: string }) => {
  return <div className={`${titleFont.className} mb-2 text-xl`}>{title}</div>;
};

const TextArea = (props: { title: string; overview: any }) => {
  const { title, overview } = props;
  return (
    <div className="text-1 flex w-full flex-col text-pretty p-2">
      <PostTitle title={title} />
      <ScrollArea
        className={`h-full w-full text-xs ${bodyFont.className} rounded p-2 shadow-inner`}
      >
        <PortableText value={overview || []} />
        <ScrollBar className="bg-gray-300" />
      </ScrollArea>
    </div>
  );
};

const InteractArea = ({ gallery, links, useMouseEvents }) => {
  return (
    gallery &&
    gallery.length > 0 && (
      <div className="h-full w-[200px] overflow-hidden md:w-[400px]">
        <LinkArea links={links} />
        <PhotoPocket gallery={gallery} onMouseEvent={useMouseEvents} />
      </div>
    )
  );
};

const LinkArea = ({ links }): JSX.Element => {
  return (
    links &&
    links.length > 0 && (
      <div
        id="link wrapper"
        className="flex h-1/2 w-full flex-col items-start justify-start gap-y-1 p-2"
      >
        {links.map((link, index) => {
          return (
            <div className="relative h-1/5 w-full" key={index}>
              <div className="sticky-note-shadow absolute h-full w-full translate-y-[3px]"></div>
              <a
                href={link.url}
                target="_blank"
                className={`bg-sticky-100 absolute h-full w-full rotate-[-1deg] text-center align-middle hover:underline`}
              >
                {link.title || link.url}
              </a>
            </div>
          );
        })}
      </div>
    )
  );
};
