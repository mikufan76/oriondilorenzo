import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import type { linksPayload } from '@/types'

export interface linksPageProps {
  data: linksPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function LinksPage({ data }: linksPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, linksLinks } = data ?? {}
  return (
    <div className="h-full mt-4 grid gap-5 grid-cols-1 xl:grid-cols-2">
      <div className="w-full">
        {/* Title */}
        <div className='text-3xl mb-2'>{title && title}</div>

        {/* Links */}
        {linksLinks &&
          linksLinks.map((link, key) => {
            return (
              <div key={key} className="flex flex-wrap">
                <Link
                  target="_blank"
                  className={`flex flex-wrap text-lg text-secondary underline`}
                  href={link.url!}
                >
                  {link.title}
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default LinksPage
