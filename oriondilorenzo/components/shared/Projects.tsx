import * as React from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea'
import { Scrollbar } from '@radix-ui/react-scroll-area'
import Book  from '@/components/shared/Book'
import { HomePageProps } from '../pages/home/HomePage'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export function Projects({ data, encodeDataAttribute }: HomePageProps) {
  return (
    <ScrollArea className="h-screen w-screen z-50 smooth-scroll">
      <div className="h-screen w-screen opacity-0" />{' '}
      <div className="h-min w-screen flex flex-row justify-center ">
        <Book data={data} encodeDataAttribute={encodeDataAttribute} />
      </div>
      <Scrollbar />
    </ScrollArea>
  )
}
