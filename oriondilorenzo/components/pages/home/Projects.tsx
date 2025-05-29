import * as React from 'react'

import { ScrollArea} from '@/components/ui/ScrollArea'
import { Scrollbar } from '@radix-ui/react-scroll-area'
import Book  from '@/components/pages/home/Book/Book'
import { HomePageProps } from './HomePage'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export function Projects({ data, encodeDataAttribute }: HomePageProps) {
  return (
    <ScrollArea className="h-screen w-screen z-50 smooth-scroll">
      <div className="h-screen w-screen opacity-0" />{' '}
      <div className="h-screen w-screen flex flex-row justify-center items-center transition-all hover:backdrop-blur-sm">
        <Book data={data} encodeDataAttribute={encodeDataAttribute} />
      </div>
      <Scrollbar />
    </ScrollArea>
  )
}
