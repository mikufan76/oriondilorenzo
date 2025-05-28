import Logo from './svgs/logo'
import TitlePlate from './TitlePlate'
import Navbar from './Navbar'
interface HeaderProps {
  description?: any
}
export function Header(props: HeaderProps) {
  return (
    <div className="w-full h-screen bg-[url(/header-bg.png)] bg-cover flex justify-center items-center overflow-hidden">
      {/* Foreground */}
      <div className="w-[90%] h-[90%] min-w-[300px] flex flex-col sm:flex-row sm:justify-between  bg-bg text-primary px-2 md:px-4 py-4">
        {/* Left Side */}
        <div className="grow h-5/6  w-full md:px-0 sm:w-[62.5%]sm:h-full max-w-[1000px]">
          <TitlePlate />
          <div className="logo-wrapper h-1/2 w-full  flex justify-center items-center sm:items-normal ">
            <Logo className="h-full w-min animate-in fade-in rotate-[-10deg] min-w-[300px] scale-125 " />
          </div>
        </div>
        <div className='flex flex-col shrink w-full sm:w-1/5 h-[15vw] sm:h-full justify-between items-center p-2 sm:p-6'>
          <Navbar/>
        </div>
      </div>
    </div>
  )
}


