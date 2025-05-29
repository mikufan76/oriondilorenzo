'use client'
import { resolveHref } from '@/sanity/lib/utils'
import Link from 'next/link'
import { ProjectListItem } from '../ProjectListItem'
import { HomePageProps } from '../HomePage'
import HTMLFlipBook from 'react-pageflip'
import { DataTable } from '@/components/ui/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import { useState, useRef, createRef } from 'react'
import { Button } from '@/components/ui/Button'
import PageFlip from 'page-flip'

export default function Book({ data, encodeDataAttribute }: HomePageProps) {
  const { overview = [], showcaseProjects = [] } = data ?? {}
  showcaseProjects.forEach((project, index) => (project.page = index + 1))
  const book = useRef<PageFlip>(new PageFlip({
  }))

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
            variant={'outline'}
            onClick={() => {
              const page = row.getValue('page') // Access the page number
              console.log('Turning to page:', page - 1)
              console.log('Book ref:', book.current)
              book.current.pageflip.flip(2)
            }}
          >
            {row.getValue('page')}
          </Button>
        )
      },
    },
  ]

  return (
    <div className="w-2/3 h-min flex items-center justify-center  bg-brown py-2 px-2 max-w-[1200px] rounded">
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
        drawShadow={false}
        flippingTime={600}
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
        <div className="flex flex-col">
          <PageOne showcaseProjects={showcaseProjects} columns={columns} />
        </div>
        <div className="demoPage bg-blue shadow-xl">Page 2</div>
        <div className="demoPage bg-green shadow-xl">Page 3</div>
        <div className="demoPage bg-purple shadow-xl">Page 4</div>
        <div className="demoPage bg-red shadow-xl">Page 1</div>
        <div className="demoPage bg-blue shadow-xl">Page 2</div>
      </HTMLFlipBook>
    </div>
  )
}

function PageOne({ showcaseProjects, columns }) {
  return (
    <DataTable columns={columns} data={showcaseProjects} showHeader={true} />
  )
}
