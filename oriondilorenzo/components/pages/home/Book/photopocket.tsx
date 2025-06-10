'use client'
import ImageBox from '@/components/shared/ImageBox'
import { cn } from '@/sanity/lib/utils'
import { loadProject } from '@/sanity/loader/loadQuery'
import { Images } from 'lucide-react'
import { Image } from 'sanity'

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
        className={cn(
          className,
          'absolute bottom-0 right-0 z-50 aspect-square w-3/5 bg-red',
        )}
      >
        <ImageBox image={gallery[0].photo} />
        <div
          className="absolute bottom-0 z-50 h-1/2 w-full border-2 border-red"
          onPointerEnter={() => onMouseEvent(false)}
          onPointerLeave={() => onMouseEvent(true)}
        ></div>
      </button>
    </>
  )
}
