import Logo from '@/components/shared/svgs/logo'
import Navbar from './Navbar'
import { Projects } from './Projects'
import TitlePlate from './TitlePlate'

export function Header() {
  return (
    <div className="absolute w-full h-full bg-[url(/header-bg.png)] bg-cover flex justify-center items-center overflow-hidden">
      {/* Foreground */}
      <div className="mx-[5%] w-full  h-full mt-[5%]  min-w-[300px] flex flex-col sm:flex-row sm:justify-between  bg-bg text-primary px-2 md:px-4 py-4">
        {/* Left Side */}
        <div className="grow h-5/6  w-full md:px-0 sm:w-[62.5%]sm:h-full max-w-[1000px]">
          <TitlePlate />
          <div className="logo-wrapper h-1/2 w-full  flex flex-col sm:flex-row justify-center items-center sm:items-normal ">
            <Logo className="h-full w-min animate-in fade-in rotate-[-10deg] min-w-[250px] scale-125 " />
          </div>
        </div>
        <div className='flex flex-col shrink w-full sm:w-1/5 h-[15vw] sm:h-full justify-between items-center p-2 sm:p-6'>
          <Navbar/>
        </div>
      </div>
    </div>
  )
}


