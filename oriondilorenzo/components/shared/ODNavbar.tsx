import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faHome, faBookOpen
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Name from '@/components/shared/svgs/name';
import Starbar from '@/components/shared/starBar';
import { TooltipContent, TooltipTrigger, Tooltip } from '../ui/ToolTip';

export default function HorizontalNavbar() {
    return (
        <div className='relative w-full h-[10%]'>
            <div className='relative w-full h-full flex items-center justify-center pt-3 '>
                <Name className='absolute top-2 h-[17px] w-auto px-2' />
                <nav className='relative w-5/6 h-full flex items-center justify-between flex-col'>
                    <Starbar className=" absolute h-10 w-full pointer-events-none" strokeWidth={"1.5px"} shown={true} />
                    <div className="cascadia-code flex h-full w-full px-4 flex-row items-center justify-center gap-6 bg-transparent px-6 translate-y-1/2">
                        <NavbarButton
                            icon={faHome}
                            label="Home"
                            href="/"
                        />
                        <NavbarButton
                            icon={faBookOpen}
                            label="Comics"
                            href="/comics"
                        />
                    </div>
                    <Starbar className="h-10 w-full pointer-events-none" strokeWidth={"1.5px"} shown={true} />
                </nav>
            </div>
        </div>
    );
}

export function MobileHorizontalNavbar() {
    return <div className='relative w-full flex items-center justify-center h-[10%]'>
        <nav className='w-5/6 h-full flex items-center justify-between flex-col'>
            <div className="cascadia-code flex h-full w-full px-4 flex-row items-center justify-center bg-transparent">
                <NavbarButton
                    icon={faHome}
                    label="Home"
                    href="/"
                />
                <NavbarButton
                    icon={faBookOpen}
                    label="Comics"
                    href="/comics"
                />
            </div>
        </nav>
    </div>
}

function NavbarButton({ icon, label, href, newTab = false }) {
    return (
        <Tooltip>
            <TooltipContent side='bottom'>
                <span className='cascadia-code'>{label}</span>
            </TooltipContent>
            <TooltipTrigger asChild>
                <Link href={href} target={newTab ? "_blank" : "_self"}>
                    <Button variant={"navbar"} size={"icon"}>
                        <FontAwesomeIcon className='h-10' icon={icon} />
                    </Button>
                </Link>
            </TooltipTrigger>
        </Tooltip>
    );
}
