import { EB_Garamond } from 'next/font/google';
import { Londrina_Solid } from 'next/font/google';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

import { Button } from '@/components/ui/Button';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import { urlForImage } from '@/sanity/lib/utils';
import project from '@/sanity/schemas/documents/project';
import { ShowcaseProject } from '@/types';

import StickyLink from '../../../shared/StickyLink';
import PhotoPocket from './photopocket';

const bodyFont = EB_Garamond({
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
  pageNumber: number;
}) {
  const { coverImage, overview, slug, gallery, projectLinks, title } =
    props.showcaseProject;
  const coverImgUrl =
    coverImage &&
    urlForImage(coverImage)?.height(300).width(500).fit('crop').url();
  return (
    project && (
      <div className="relative flex h-full w-full flex-col items-center justify-between gap-y-[2%] p-2">
        <CoverImage coverImage={coverImage} />
        <div
          style={{
            height: '66.6%',
            width: '100%',
            paddingTop: '2%',
            paddingBottom: 5,
            display: 'flex',
            flexDirection: props.pageNumber % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
          <TextArea title={title || ''} overview={overview || ''} />
          <InteractArea
            gallery={gallery}
            links={projectLinks}
            pageNumber={props.pageNumber}
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
        className="h-1/3 w-5/6 border-2 border-white"
        width={500}
        height={300}
        src={coverImgUrl}
        alt={''}
      />
    )
  );
};

const PostTitle = ({ title }: { title: string }) => {
  return (
    <div className={`${titleFont.className} mb-2 md:text-xl`}>{title}</div>
  );
};

const TextArea = (props: { title: string; overview: any }) => {
  const { title, overview } = props;
  return (
    <div className="text-1 flex w-[70%] flex-col text-pretty p-2">
      <PostTitle title={title} />
      <ScrollArea
        className={`w-fulld h-full ${bodyFont.className} rounded p-2 shadow-inner`}
      >
        <PortableText value={overview || []} />
        <ScrollBar className="bg-gray-300" />
      </ScrollArea>
    </div>
  );
};

const InteractArea = ({ gallery, links, pageNumber }) => {
  return (
    (links?.length > 0 || gallery?.length > 0) && (
      <div className="overflow-show h-full w-[200px] md:w-[300px]">
        <LinkArea links={links} pageNumber={pageNumber} />
        <PhotoPocket gallery={gallery} pageNumber={pageNumber} />
      </div>
    )
  );
};

const LinkArea = ({ links, pageNumber }): JSX.Element => {
  return (
    links &&
    links.length > 0 && (
      <div
        id="link wrapper"
        className="flex h-1/4 w-full flex-col items-start justify-between gap-y-1 p-2"
      >
        {links.map((link, index) => {
          return (
            <div className="h-1/3 w-full" key={index}>
              <StickyLink
                title={link?.title || link.url}
                url={link.url}
                index={index + pageNumber}
              />
            </div>
          );
        })}
      </div>
    )
  );
};
