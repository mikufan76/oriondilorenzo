'use client'
import { Coming_Soon, Courier_Prime } from 'next/font/google'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/DataTable'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { urlForImage } from '@/sanity/lib/utils'

import { HomePageProps } from '../HomePage'
import BookIntro from './ BookIntro'
import Project from './Project'

const bookHeaderFont = Coming_Soon({
  subsets: ['latin'],
  weight: ['400'],
})

const paragraphFont = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Book({ data, encodeDataAttribute, timer }) {
  const { overview = [], showcaseProjects = [] } = data ?? {}
  showcaseProjects.forEach((project, index) => (project.page = index + 2))
  const book = useRef(null) as any

  timer.then((result) => {
    if (book.current && result) {
      const pageFlip = book.current.pageFlip()
      console.log(pageFlip.getCurrentPageIndex())
      if (pageFlip.getCurrentPageIndex() === 0) {
        pageFlip.flip(1)
      }
    }
  })

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
          <div className="flex w-full flex-row justify-center items-center">
            <div
              className="z-50 w-[30px] h-[30px] cursor-pointer rounded border-2 border-primary text-center transition-colors hover:bg-primary hover:text-brown"
              onClick={(e) => {
                e.stopPropagation() // Prevent the row click event
                let page = row.getValue('page') // Access the page number
                let currentPage = book.current.pageFlip().getCurrentPageIndex()
                const pageFlip = book.current.pageFlip()
                console.log('Total pages:', pageFlip.getPageCount())
                console.log('Current page index before flip:', currentPage)
                if (pageFlip.getOrientation() === 'landscape') {
                  page = page % 2 === 0 ? page - 1 : page
                  console.log('updated page', page)
                }

                if (page > 1) {
                  console.log('Flipping to page:', page)
                  book.current.pageFlip().flip(page)
                }
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
      className={`flex h-full min-h-[400] w-full min-w-[300] max-w-[1200px] items-center justify-center rounded-lg sm:h-5/6 sm:w-2/3 ${bookHeaderFont.className}`}
    >
      <HTMLFlipBook
        ref={book}
        width={300}
        height={500}
        style={{}}
        className={''}
        onFlip={(e) => console.log('flipped', e.data)}
        size={'stretch'}
        startPage={0}
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
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={true}
      >
        {/* front cover */}
        <div className="bg-brown">
          ORION&apos;S PROJECTS (THIS IS A WIP LOLL)
        </div>
        {/* PAGE 1 */}
        <div className="h-full w-full bg-brown p-2 text-primary">
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
              className="relative h-full w-full border-0 bg-paper p-2"
              key={project.slug}
            >
              <Project
                fontClassName={paragraphFont.className}
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
