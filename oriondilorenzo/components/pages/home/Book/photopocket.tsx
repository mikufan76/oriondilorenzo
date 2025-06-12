'use client'
import ImageBox from '@/components/shared/ImageBox'
import { cn, urlForImage } from '@/sanity/lib/utils'
import { loadProject } from '@/sanity/loader/loadQuery'
import { Images } from 'lucide-react'
import Image from 'next/image'

export type PhotoPocketProps = {
  gallery: any[]
  className?: string
  onMouseEvent: (event: boolean) => void
}

export default function PhotoPocket(props: PhotoPocketProps) {
  const { gallery, className, onMouseEvent } = props
  return (
    <>
      <button
        onPointerEnter={() => onMouseEvent(false)}
        onPointerLeave={() => onMouseEvent(true)}
        className={cn(className, 'relative w-full h-1/2')}
      >
        {gallery.length > 1 &&
          gallery.map((image, index: number) => {
            const coverImgUrl =
              image?.photo &&
              urlForImage(image.photo)?.height(700).width(500).fit('crop').url()
            return (
              <Image
                key={index}
                src={coverImgUrl || ''}
                alt={'Gallery image'}
                width={500}
                height={300}
                className='aspect-16/9 absolute'
              />
            )
          })}
      </button>
    </>
  )
}
