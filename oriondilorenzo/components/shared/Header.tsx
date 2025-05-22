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
      <div className="w-5/6 flex flex-col items-center justify-center text-center bg-bg text-primary h-5/6">
        {/* <Name className="w-1/6" />
        <Logo strokeWidth=".50" className="w-1/6" /> */}
        <StarBar className="w-1/2"  />
      </div>
    </div>
  )
}
