'use client'
import Image from 'next/image'
import { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import { urlForImage } from '@/sanity/lib/utils'

import { HomePageProps } from '../HomePage'
import { PortableText } from 'next-sanity'
import { ScrollBar, ScrollArea } from '@/components/ui/ScrollArea'

export default function Book({ data, encodeDataAttribute }: HomePageProps) {
  const { overview = [], showcaseProjects = [] } = data ?? {}
  console.log(showcaseProjects)
  showcaseProjects.forEach((project, index) => (project.page = index + 1))
  const book = useRef(null) as any

  const columns = [
    {
      accessorKey: 'icon',
      cell: ({ row }) => {
        const icon = row.getValue('icon')
        const imageUrl =
          icon && urlForImage(icon)?.height(10).width(10).fit('crop').url()
        return <Image src={imageUrl} width={10} height={10} alt={''} />
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
          <Button
            variant={'ghost'}
            onClick={() => {
              const page = row.getValue('page') // Access the page number
              book.current.pageFlip().flip(page)
            }}
          >
            {row.getValue('page')}
          </Button>
        )
      },
    },
  ]

  return (
    <div className="w-2/3 h-min flex items-center justify-center  bg-brown py-2 px-2 max-w-[1200px] rounded ">
      <HTMLFlipBook
        ref={book}
        width={300}
        height={500}
        style={{}}
        className={''}
        size={'stretch'}
        startPage={0}
        minWidth={300}
        maxWidth={600}
        minHeight={500}
        maxHeight={800}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* PAGE 1 */}
        <div className="flex flex-col h-full w-full items-end justify-end p-4">
          <CustomPortableText value={overview.text}></CustomPortableText>
          <DataTable
            variants={{ rowVariants: 'tableOfContents' }}
            columns={columns}
            data={showcaseProjects}
            showHeader={true}
          />
        </div>
        {/* PROJECT POSTS */}
        {showcaseProjects.map((project) => {
          const { coverImage } = project
          const coverImgUrl =
            coverImage &&
            urlForImage(coverImage)?.height(300).width(500).fit('crop').url()

          return (
            project && (
              <div
                key={project.slug}
                className="flex flex-col h-full w-full bg-paper p-4 content-evenly"
              >
                <div className="w-full h-1/3 overflow-hidden">
                  {coverImgUrl && (
                    <Image
                      className="w-full h-min"
                      width={500}
                      height={300}
                      src={coverImgUrl}
                      alt={''}
                    />
                  )}
                </div>
                <h3 className="text-2xl w-full h-1/6 text-center indie-flower ">
                  {project.title}
                </h3>
                <ScrollArea className="w-full h-1/3 ">
                  <PortableText value={project.overview || []} />
                  <ScrollBar />
                </ScrollArea>
              </div>
            )
          )
        })}
      </HTMLFlipBook>
    </div>
  )
}
