import Logo from '@/components/shared/svgs/logo'
import Navbar from './Navbar'
import TitlePlate from './TitlePlate'

export function Header({ projectOnClick }: { projectOnClick?: () => void }) {
  return (
    <div className="absolute w-full h-full bg-[url(/header-bg.png)] bg-cover flex justify-center items-center overflow-hidden p-[3%]">
      {/* Foreground */}
      <div className="w-full  h-full  min-w-[300px] flex flex-col sm:flex-row  justify-around sm:justify-between  bg-bg text-primary px-2 md:px-4 py-4">
        {/* Left Side */}
        <div className="grow h-5/6  w-full md:px-0 sm:w-[62.5%] sm:h-full max-w-[1000px] flex flex-col justify-between">
          <div className="w-full h-1/3 sm:h-1/2">
            <TitlePlate />
            <div className="min-w-[300px] cascadia-code text-wrap text-center sm:text-left w-full text-xl sm:text-[4vw] 2xl:text-[60px] px-2">
              <h2>Fullstack Developer</h2>
              <h2 className="lg:translate-y-[100%] ">& Designer</h2>
            </div>
          </div>
          <div className="logo-wrapper shrink h-3/4 w-full flex flex-col sm:flex-row justify-center items-center sm:items-normal md:justify-normal">
            <Logo className="h-5/6 w-min animate-wiggle min-w-[250px] md:m-[10%]" />
          </div>
        </div>
        <div className="flex flex-col min- w-full sm:w-1/5 h-[15vw] sm:h-full justify-between items-center p-2 sm:p-6">
          <Navbar projectOnClick={projectOnClick} />
        </div>
      </div>
    </div>
  )
}
