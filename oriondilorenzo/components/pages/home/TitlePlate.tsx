import StarBar from '@/components/shared/starBar'
import Name from '@/components/shared/svgs/name'

const TitlePlate = () => {
  return (
    <div className={"flex flex-col w-full min-w-[300px] h-min items-center sm:justify-start sm:items-start relative mb-[1%] sm:mb-[3%]"}>
      <Name className="h-full min-w-[220px] pl-2 w-5/6" />
      <StarBar className="absolute bottom-[-60%]" />
    </div>
  )
}

export default TitlePlate
