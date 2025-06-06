'use client'
import { Courier_Prime, Nanum_Pen_Script } from 'next/font/google'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea'
import { urlForImage } from '@/sanity/lib/utils'

import { HomePageProps } from '../HomePage'

const nanumPen = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: ['400'],
})

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Book({ data, encodeDataAttribute }: HomePageProps) {
  const { overview = [], showcaseProjects = [] } = data ?? {}
  showcaseProjects.forEach((project, index) => (project.page = index + 1))
  const book = useRef(null) as any

  const columns = [
    {
      accessorKey: 'icon',
      cell: ({ row }) => {
        const icon = row.getValue('icon')
        const imageUrl =
          icon && urlForImage(icon)?.height(20).width(20).fit('crop').url()
        return <Image src={imageUrl} width={20} height={20} alt={''} />
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
          <div className="w-full">
            <div
              className="cursor-pointer border-2 border-primary w-[30px] text-center hover:bg-primary hover:text-brown transition-colors rounded"
              onClick={() => {
                const page = row.getValue('page') // Access the page number
                book.current.pageFlip().flip(page)
              }}
            >
              {row.getValue('page')}
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div
      className={`w-full h-[90vh] sm:h-min  sm:w-2/3 min-h-[400]  min-w-[300] flex items-center justify-center  max-w-[1200px] rounded-lg ${nanumPen.className}`}
    >
      <HTMLFlipBook
        ref={book}
        width={300}
        height={500}
        style={{}}
        className={''}
        size={'stretch'}
        startPage={1}
        maxWidth={1000}
        maxHeight={1000}
        minWidth={250}
        minHeight={400}
        drawShadow={true}
        flippingTime={800}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={10}
        showPageCorners={false}
        disableFlipByClick={true}
      >
        {/* front cover */}
        <div className="bg-brown">
          ORION&apos;S PROJECTS (THIS IS A WIP LOLL)
        </div>
        {/* PAGE 1 */}
        <div className="flex flex-col h-full w-full p-2 bg-brown text-primary">
          <div id="intro" className=" w-full h-1/3">
            <div className="w-full text:xl md:text-4xl">
              IF FOUND PLEASE EMAIL
            </div>
            <div className="w-full md:text-2xl">@OrionDiLorenzo@Proton.me</div>

            <div className="p-4">
              <CustomPortableText value={overview.text}></CustomPortableText>
            </div>
          </div>
          <div className="h-full  w-full">
            <h3 className="w-full text-center text-xl md:text-3xl ">
              Table of Contents
            </h3>

            <ScrollArea className="w-full h-full shadow-inner">
              <DataTable
                variants={{ rowVariants: 'tableOfContents' }}
                columns={columns}
                data={showcaseProjects}
                showHeader={true}
              />
              <ScrollBar />
            </ScrollArea>
          </div>
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
                className="flex flex-col h-full w-full bg-paper py-2 px-4 content-between"
              >
                <div className="w-full h-1/2">
                  {coverImgUrl && (
                    <Image
                      className="w-full hover:opacity-80"
                      width={500}
                      height={300}
                      src={coverImgUrl}
                      alt={''}
                    />
                  )}
                  <div className="text-3xl w-full text-center text-bold flex items-center justify-center">
                    {project.title}
                  </div>
                </div>
                <ScrollArea
                  className={`w-full h-1/2 text-xl p-4 shadow-inner grow cascadia-code ${courierPrime.className}`}
                >
                  <PortableText value={project.overview || []} />
                </ScrollArea>
              </div>
            )
          )
        })}
      </HTMLFlipBook>
    </div>
  )
}
