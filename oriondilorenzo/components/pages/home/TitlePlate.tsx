import StarBar from '@/components/shared/starBar'
import Name from '@/components/shared/svgs/name'

const TitlePlate = () => {
  return (
    <div className="w-full min-w-[300px] h-2/5 justify-center items-center sm:justify-start sm:items-start">
      <Name className="w-5/6 min-w-[220px] pl-2 max-w-[1000px]" />
      <StarBar />
      {/* <div className="min-w-[300px] cascadia-code text-wrap text-center sm:text-left w-full text-xl sm:text-[4vw] 2xl:text-[60px] translate-y-[-9vw] lg:translate-y-[-8vw] px-2">
        <h2>Fullstack Developer</h2>
        <h2 className="lg:translate-y-[100%] ">& Designer</h2>
      </div> */}
    </div>
  )
}

export default TitlePlate
