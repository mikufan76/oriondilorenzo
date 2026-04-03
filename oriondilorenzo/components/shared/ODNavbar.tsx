import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faLayerGroup,
    faSquareArrowUpRight,
    faSquareEnvelope,
    faHome
} from '@fortawesome/free-solid-svg-icons';

import NavbarButton from '@/components/pages/home/NavbarButton';
import { Button } from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Name from '@/components/shared/svgs/name';
import Starbar from '@/components/shared/starBar';

export default function HorizontalNavbar() {
    return (
        <div className='w-full h-full flex items-center justify-between flex-col'>
            <div className="cascadia-code flex h-16 w-full flex-row items-start justify-center gap-6 bg-transparent px-6 translate-y-[10px]">
                <Button className='h-10 w-10'><Link href="/"><FontAwesomeIcon className='h-10' icon={faHome} /></Link></Button>
            </div>
            <Starbar className="h-10 w-2/5" strokeWidth={"3px"} shown={true} />
        </div>
    );
}
