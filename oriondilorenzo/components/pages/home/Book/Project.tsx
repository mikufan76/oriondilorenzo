import { urlForImage } from '@/sanity/lib/utils'
import project from '@/sanity/schemas/documents/project'
import { ShowcaseProject } from '@/types'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

export default function Project({ coverImage, overview, slug, fontClassName, title }) {
  const coverImgUrl =
    coverImage &&
    urlForImage(coverImage)?.height(300).width(500).fit('crop').url()

  return (
    project && (
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full h-min">
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
        <div className="text-xl lg:text-3xl w-full h-min text-center text-bold flex items-center justify-center">
          {title}
        </div>
        <ScrollArea
          className={`w-full h-1/2 text-sm  p-4 shadow-inner grow cascadia-code ${fontClassName}`}
        >
          <PortableText value={overview || []} />
        </ScrollArea>
      </div>
    )
  )
}
