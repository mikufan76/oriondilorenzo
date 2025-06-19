import Logo from '@/components/shared/svgs/logo';

import Navbar from './Navbar';
import TitlePlate from './TitlePlate';

export function Header({
  projectOnClick,
  resumeUrl,
}: {
  projectOnClick?: () => void;
  resumeUrl: string;
}) {
  return (
    <div className="absolute flex h-full w-full min-w-[300px] flex-col justify-around bg-bg px-2 py-4 text-primary sm:flex-row sm:justify-between md:px-4">
      {/* Left Side */}
      <div className="flex h-5/6 w-full max-w-[1000px] grow flex-col justify-between sm:h-full sm:w-[62.5%] md:px-0">
        <div className="h-1/3 w-full sm:h-1/2">
          <TitlePlate />
          <div className="cascadia-code w-full min-w-[300px] text-wrap px-2 text-center text-xl sm:text-left sm:text-[4vw] 2xl:text-[60px]">
            <h2>Fullstack Developer</h2>
            <h2 className="lg:translate-y-[100%]">& Designer</h2>
          </div>
        </div>
        <div className="logo-wrapper sm:items-normal flex h-3/4 w-full shrink flex-col items-center justify-center sm:flex-row md:justify-normal">
          <Logo className="h-5/6 w-min min-w-[250px] animate-wiggle md:m-[10%]" />
        </div>
      </div>
      <div className="min- flex h-[15vw] w-full flex-col items-center justify-between p-2 sm:h-full sm:w-1/5 sm:p-6">
        <Navbar projectOnClick={projectOnClick} resumeUrl={resumeUrl} />
      </div>
    </div>
  );
}
