import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { Header } from '@/components/shared/Header'
import { Projects } from '@/components/shared/Projects'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback

}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents


  return (
    <div className="overflow-hidden h-screen w-screen">
      {/* Header */}
      <Header />
      <Projects data={data} encodeDataAttribute={encodeDataAttribute}/>
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
