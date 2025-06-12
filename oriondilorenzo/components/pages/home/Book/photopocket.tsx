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
        )}
      >
        <ImageBox image={gallery[0].photo} />
        <div
          onPointerEnter={() => onMouseEvent(false)}
          onPointerLeave={() => onMouseEvent(true)}
        ></div>
      </button>
    </>
  )
}
