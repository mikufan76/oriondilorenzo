import Image from 'next/image'
import Logo from './svgs/logo'
import Name from './svgs/name'
import StarBar from './starBar'
import Star from './svgs/star'

interface HeaderProps {
  description?: any
}
export function Header(props: HeaderProps) {
  return (
    <div className="w-full h-screen bg-[url(/header-bg.png)] bg-cover flex justify-center items-center">
      {/* Foreground */}
      <div className="w-[90%] h-[90%] min-w-[300px] flex flex-col text-center bg-bg text-primary p-2">
        {/* Left Side */}
        <div className="h-full w-[62.5%] relative">
          {/** Title plate */}
          <div className="flex flex-col w-full min-w-[300px] h-2/5 border-2 border-green">
            <Name className="w-5/6 min-w-[220px] pl-2" />
            <div className="h-[10vw] min-h-[40px] overflow-visible border-blue border-2 translate-y-[-45%]">
              <StarBar />
            </div>
            <div className="min-w-[300px] cascadia-code border-red border-2 text-wrap text-left w-full translate-y-[-8vw] pl-2">
              <h2>Fullstack Developer</h2>
              <h2>& Designer</h2>
            </div>
          </div>
          <Logo className="h-1/2 w-min animate-in fade-in" />
        </div>
      </div>
    </div>
  )
}
