'use client'
import { Courier_Prime, Nanum_Pen_Script } from 'next/font/google'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import { urlForImage } from '@/sanity/lib/utils'

import { HomePageProps } from '../HomePage'
import { ScrollArea } from '@/components/ui/ScrollArea'
import BookIntro from './ BookIntro'
import Project from './Project'

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
              onClick={(e) => {
                e.stopPropagation() // Prevent the row click event
                const page = row.getValue('page') // Access the page number
                book.current.pageFlip().flip(page + 2)
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
      className={`w-full h-full sm:h-5/6  sm:w-2/3 min-h-[400]  min-w-[300] flex items-center justify-center  max-w-[1200px] rounded-lg ${nanumPen.className}`}
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
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* front cover */}
        <div className="bg-brown">
          ORION&apos;S PROJECTS (THIS IS A WIP LOLL)
        </div>
        {/* PAGE 1 */}
        <div className="h-full w-full p-2 bg-brown text-primary">
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
              className="w-full h-full bg-paper p-2 border-0"
              key={project.slug}
            >
              <Project
                fontClassName={courierPrime.className}
                coverImage={project.coverImage}
                overview={project.overview}
                slug={project.slug}
                title={project.title}
              />
            </div>
          )
        })}
      </HTMLFlipBook>
    </div>
  )
}
