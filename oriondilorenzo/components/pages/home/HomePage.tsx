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
  Opened,
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const [bookState, setBookState] = useState<BookState>(BookState.Hidden)
  let style =
    'h-screen w-screen flex flex-row justify-center items-center relative overflow-hidden p-0'

  switch (bookState) {
    case BookState.Hidden:
      style += ' translate-y-[-12312312vw]'
      break
    case BookState.Closed:
      style += ' animate-slide-out-book'
      break
    case BookState.Opened:
    case BookState.Open:
      style += ' animate-in slide-in-from-bottom duration-500 ease-out'
      break
  }

  const handleBookClick = () => {
    if (bookState === BookState.Open || bookState === BookState.Opened) {
      setBookState(BookState.Closed)
    } else if (bookState === BookState.Hidden) {
      setBookState(BookState.Open)
    } else if (bookState === BookState.Closed) {
      setBookState(BookState.Opened)
    }
  }

  const closeBook = () => {
    setBookState(BookState.Closed)
  }

  const timer = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bookState === BookState.Open) {
        console.log('book is open!');
        resolve(true)
      } else {
        resolve(false)
      }
    }, 500)
  })

  return (
    <div className="overflow-hidden h-screen w-screen ">
      {/* Header */}
      <Header projectOnClick={handleBookClick} />
      {bookState == (BookState.Open || BookState.Closed) && (
        <BgBlur bookState={bookState} onClick={closeBook} />
      )}
      <div className={style}>
        <Book
          data={data}
          encodeDataAttribute={encodeDataAttribute}
          timer={timer}
        />
        <Button
          variant={'outline'}
          className="absolute top-0 right-0 sm:top-1 sm:right-1 bg-bg text-primary sm:text-2xl hover:bg-primary hover:text-bg transition-colors rounded"
          onClick={closeBook}
        >
          X
        </Button>
      </div>
    </div>
  )
}

const BgBlur = ({ bookState, onClick }) => {
  const animation =
    bookState === BookState.Open
      ? 'animate-in fade-in duration-500 ease-out'
      : 'animate-custom-fade '
  return (
    <div
      onClick={onClick}
      className={`absolute w-screen h-screen backdrop-blur-lg ${animation}`}
    ></div>
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
