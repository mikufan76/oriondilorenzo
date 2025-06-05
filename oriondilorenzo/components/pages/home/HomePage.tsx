'use client'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { Header } from './Header'
import type { HomePagePayload } from '@/types'
import Book from '@/components/pages/home/Book/Book'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

enum BookState {
  Hidden,
  Closed,
  Open,
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const [bookState, setBookState] = useState<BookState>(BookState.Hidden)
  let style =
    'h-screen w-screen flex flex-row justify-center items-center relative overflow-hidden'

  switch (bookState) {
    case BookState.Hidden:
      style += ' translate-y-[-12312312vw]'
      break
    case BookState.Closed:
      style += ' animate-slide-out-book'
      break
    case BookState.Open:
      style += ' animate-in slide-in-from-bottom duration-500 ease-out'
      break
  }

  const handleBookClick = () => {
    if (bookState === BookState.Open) {
      setBookState(BookState.Closed)
    } else {
      setBookState(BookState.Open)
    }
  }

  return (
    <div className="overflow-hidden h-screen w-screen">
      {/* Header */}
      <Header projectOnClick={handleBookClick} />
      <div className={style}>
        {bookState === BookState.Open && (
          <div className="absolute w-screen h-screen backdrop-blur-lg animate-in fade-in duration-[5s]"></div>
        )}
        <Book data={data} encodeDataAttribute={encodeDataAttribute} />
        <Button
          className="z-50"
          onClick={() => {
            setBookState(BookState.Closed)
          }}
        />
      </div>
    </div>
  )
}

// export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
//   // Default to an empty object to allow previews on non-existent documents
//   const { overview = [], showcaseProjects = [] } = data ?? {}

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       {overview && <Header description={overview} />}
//       {/* Showcase projects */}
//       {showcaseProjects && showcaseProjects.length > 0 && (
//         <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
//           {showcaseProjects.map((project, key) => {
//             const href = resolveHref(project?._type, project?.slug)
//             if (!href) {
//               return null
//             }
//             return (
//               <Link
//                 key={key}
//                 href={href}
//                 data-sanity={encodeDataAttribute?.([
//                   'showcaseProjects',
//                   key,
//                   'slug',
//                 ])}
//               >
//                 <ProjectListItem project={project} />
//               </Link>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }

export default HomePage
