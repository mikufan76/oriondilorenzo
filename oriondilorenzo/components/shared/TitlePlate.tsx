import StarBar from './starBar'
import Name from './svgs/name'

const TitlePlate = () => {
  return (
    <div className="flex flex-col w-full min-w-[300px] h-2/5 justify-center items-center sm:justify-normal sm:items-stretch">
      <Name className="w-5/6 min-w-[220px] pl-2" />
      <div className="h-[10vw] min-h-[40px] overflow-visible translate-y-[-45%] w-full">
        <StarBar />
      </div>
      <div className="min-w-[300px] cascadia-code text-wrap text-center sm:text-left w-full text-xl sm:text-[4vw] translate-y-[-9vw] lg:translate-y-[-8vw] px-2">
        <h2>Fullstack Developer</h2>
        <h2 className="lg:translate-y-[100%] ">& Designer</h2>
      </div>
    </div>
  )
}

export default TitlePlate
