import { faLinkedin,faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faLayerGroup,
  faSquareArrowUpRight,
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import NavbarButton from './NavbarButton'

export default function Navbar({ projectOnClick }) {
  return (
    <div className="cascadia-code flex h-full w-full flex-row items-center justify-between sm:flex-col [&>*]:h-[90%] sm:[&>*]:m-4 sm:[&>*]:h-1/6">
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
        icon={faSquareEnvelope}
        label="Email"
        href="mailto:oriondilorenzo@proton.me"
      />
      <NavbarButton
        icon={faSquareArrowUpRight}
        label="Resume"
        href="https://docs.google.com/document/d/1ubCg4QlVmeBGIDw2s4o32bMdkLQyAsF1/edit"
      />

      <NavbarButton
        icon={faLayerGroup}
        onClick={projectOnClick}
        label="Projects"
      />
    </div>
  )
}
