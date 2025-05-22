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
      <div className="w-[90%] h-[90%] flex flex-col text-center bg-bg text-primary p-2">
        {/** Title plate */}
        <div className="flex flex-col w-2/3 min-w-[250px] h-min">
          <Name className="w-5/6 min-w-[208px] translate-y-[75%] p-1" />
          <div className="h-1/3 overflow-visible">
          <StarBar />
          </div>
        </div>
        <Logo className="h-1/2 w-min animate-in fade-in" />
      </div>
    </div>
  )
}
