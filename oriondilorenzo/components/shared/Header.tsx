import Logo from './svgs/logo'
import TitlePlate from './TitlePlate'
interface HeaderProps {
  description?: any
}
export function Header(props: HeaderProps) {
  return (
    <div className="w-full h-screen bg-[url(/header-bg.png)] bg-cover flex justify-center items-center">
      {/* Foreground */}
      <div className="w-[90%] h-[90%] min-w-[300px] flex flex-row text-center bg-bg text-primary px-2 py-4">
        {/* Left Side */}
        <div className="h-full w-full md:px-0 sm:w-[62.5%] relative border-yellow border-2">
          <TitlePlate />
          <div className="logo-wrapper h-1/2 w-full border-2 border-blue flex justify-center items-center ">
            <Logo className="h-full w-min animate-in fade-in border-2 border-red rotate-[-10deg] min-w-[300px] scale-125" />
          </div>
        </div>
      </div>
    </div>
  )
}
