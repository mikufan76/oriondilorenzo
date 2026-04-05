import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faLayerGroup,
  faNewspaper,
  faSquareArrowUpRight,
  faBoxArchive,
  faFolderOpen,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

import NavbarButton from './NavbarButton';

export default function Navbar({ projectOnClick, resumeUrl }) {
  return (
    <div className="cascadia-code flex h-full w-full flex-row gap-2 items-center sm:flex-col sm:gap-4 [&>*]:flex-1 [&>*]:min-w-0 sm:[&>*]:h-1/6">
      <NavbarButton
        icon={faLinkedin}
        label="LinkedIn"
        href="https://www.linkedin.com/in/orion-dilorenzo"
      />
      <NavbarButton
        icon={faSquareGithub}
        label="GitHub"
        href="https://github.com/mikufan76"
      />
      <NavbarButton
        icon={faSquareArrowUpRight}
        label="Resume"
        href={resumeUrl}
      />

      <NavbarButton
        icon={faLayerGroup}
        onClick={projectOnClick}
        label="Projects"
      />

      <NavbarButton
        icon={faBookOpen}
        label="Comics"
        href={"./comics"}
      />
    </div>
  );
}
