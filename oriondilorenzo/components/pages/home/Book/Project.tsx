import Image from 'next/image'
import { PortableText } from 'next-sanity'

import { ScrollArea } from '@/components/ui/ScrollArea'
import { urlForImage } from '@/sanity/lib/utils'
import project from '@/sanity/schemas/documents/project'
import { ShowcaseProject } from '@/types'

import PhotoPocket from './photopocket'

export default function Project(props: {
  showcaseProject: ShowcaseProject
  useMouseEvents: (event: boolean) => void
}) {
  const { coverImage, overview, slug, gallery, fontClassName, title } =
    props.showcaseProject
  const useMouseEvents = props.useMouseEvents
  if (title?.includes('This site!')) {
  }
  const coverImgUrl =
    coverImage &&
    urlForImage(coverImage)?.height(300).width(500).fit('crop').url()
  return (
    project && (
      <div className="relative flex h-full w-full flex-col justify-between">
        <div className="h-1/3 w-full bg-white shadow-md">
          {coverImgUrl && (
            <Image
              className="m-auto h-full overflow-hidden p-1"
              width={500}
              height={300}
              src={coverImgUrl}
              alt={''}
            />
          )}
        </div>
        <div className="flex h-2/3 w-full flex-row justify-between bg-purple">
          <TextArea
            title={title || ''}
            overview={overview || ''}
            fontClassName={fontClassName || ''}
          />
          {gallery && gallery.length > 0 && (
            <div className="w-full  bg-red">
              <PhotoPocket gallery={gallery} onMouseEvent={useMouseEvents} />
            </div>
          )}
        </div>
      </div>
    )
  )
}

const TextArea = (props: {
  title: string
  overview: any
  fontClassName: string
}) => {
  const { title, overview, fontClassName } = props
  return (
    <div className="flex-1 w-full flex-col bg-pink">
      <div className="text-bold my-2 flex h-max w-full shrink items-center justify-center text-center text-xl lg:text-3xl min-w-1/2">
        {title}
      </div>
      <div
        className={`cascadia-code h-1/2 w-full shrink p-4 text-sm shadow-inner ${fontClassName}`}
      >
        <PortableText value={overview || []} />
      </div>
    </div>
  )
}
