"use client"
import { resolveHref } from '@/sanity/lib/utils'
import Link from 'next/link'
import { ProjectListItem } from './ProjectListItem'
import { HomePageProps } from './HomePage'
import HTMLFlipBook from 'react-pageflip'

export default function Book({ data, encodeDataAttribute }: HomePageProps) {
  const { overview = [], showcaseProjects = [] } = data ?? {}
  return (

    <div className="w-2/3 h-min flex items-center justify-center  bg-brown py-2 px-2 max-w-[1200px]">
      <HTMLFlipBook
        width={300}
        height={500}
        style={{}}
        className={'shadow-xl'}
        size={'stretch'}
        startPage={0}
        minWidth={300}
        maxWidth={600}
        minHeight={500}
        maxHeight={800}
        drawShadow={false}
        flippingTime={300}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={50}
        showCover={false}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        <div className="demoPage bg-red shadow-xl">Page 1</div>
        <div className="demoPage bg-blue shadow-xl">Page 2</div>
        <div className="demoPage bg-green shadow-xl">Page 3</div>
        <div className="demoPage bg-purple shadow-xl">Page 4</div>
                <div className="demoPage bg-red shadow-xl">Page 1</div>
        <div className="demoPage bg-blue shadow-xl">Page 2</div>
      </HTMLFlipBook>
    </div>
  )
}

{
  /* {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} />
              </Link>
            )
          })} */
}
