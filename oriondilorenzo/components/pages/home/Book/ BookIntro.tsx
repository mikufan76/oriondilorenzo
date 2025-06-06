import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { DataTable } from '@/components/ui/DataTable'
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea'

export default function BookIntro({ overview, columns, showcaseProjects }) {
  return (
    <div
      id="page-wrapper"
      className="w-full h-full flex flex-col justify-between"
    >
      <div id="intro" className=" w-full h-1/3 flex-none">
        <div className="w-full h-min text:xl lg:text-4xl">
          IF FOUND PLEASE EMAIL
          <div className="w-full h-min lg:text-2xl">
            @OrionDiLorenzo@Proton.me
          </div>
        </div>
        <div className="lg:p-2 text-xs md:text-sm lg:text-lg h-min">
          <CustomPortableText value={overview.text}></CustomPortableText>
        </div>
      </div>
      <h3 className="w-full h-min text-center md:text-lg lg:text-3xl">
        Table of Contents
      </h3>
      <ScrollArea className="w-full h-full shrink min-h-[30%] shadow-inner overflow-hidden">
        <DataTable
          variants={{ rowVariants: 'tableOfContents' }}
          columns={columns}
          data={showcaseProjects}
          showHeader={true}
        />
        <ScrollBar />
      </ScrollArea>
    </div>
  )
}
