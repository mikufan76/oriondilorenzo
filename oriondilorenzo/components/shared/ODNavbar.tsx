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
        <div className='absolute top-0 w-full h-[10%]'>
            <div className='relative w-full h-full flex items-center justify-center py-2'>
                <Name className='absolute top-1 h-[18px] w-auto' />
                <nav className='relative w-min h-full flex items-center justify-between flex-col'>
                    <Starbar className=" absolute h-10 w-full pointer-events-none" strokeWidth={"4px"} shown={true} />
                    <div className="cascadia-code flex h-full w-min px-4 flex-row items-center justify-center gap-6 bg-transparent px-6 translate-y-1/2">
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
                        <NavbarButton
                            icon={faLinkedin}
                            label="LinkedIn"
                            href="https://www.linkedin.com/in/orion-dilorenzo"
                            newTab={true}
                        />
                    </div>
                    <Starbar className="h-10 w-full pointer-events-none" strokeWidth={"4px"} shown={true} />
                </nav>
            </div>
        </div>
    );
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
