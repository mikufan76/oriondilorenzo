import Image from 'next/image'
import { PortableText } from 'next-sanity'

import { ScrollArea } from '@/components/ui/ScrollArea'
import { urlForImage } from '@/sanity/lib/utils'
import project from '@/sanity/schemas/documents/project'
import { ShowcaseProject } from '@/types'

export default function Project({
  coverImage,
  overview,
  slug,
  fontClassName,
  title,
}) {
  const coverImgUrl =
    coverImage &&
    urlForImage(coverImage)?.height(300).width(500).fit('crop').url()

  return (
    project && (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="h-min w-full">
          {coverImgUrl && (
            <Image
              className="w-full hover:opacity-80"
              width={500}
              height={300}
              src={coverImgUrl}
              alt={''}
            />
          )}
        </div>
        <div className="text-bold my-2 flex h-max w-full items-center justify-center text-center text-xl lg:text-3xl">
          {title}
        </div>
        <ScrollArea
          className={`cascadia-code h-1/2 w-full grow p-4 text-sm shadow-inner ${fontClassName}`}
        >
          <PortableText value={overview || []} />
        </ScrollArea>
      </div>
    )
  )
}
