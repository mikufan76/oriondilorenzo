import { Button } from '@/components/ui/Button'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faSquareEnvelope,
  faUpRightFromSquare,
  faFilePdf,
  faEnvelope,
  faBook,
  faSquareArrowUpRight,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarButton from './NavbarButton'

export default function Navbar({ projectOnClick }) {
  return (
    <div className="flex flex-row sm:flex-col w-full [&>*]:h-[90%]  sm:[&>*]:h-1/6 sm:[&>*]:m-4 h-full items-center justify-between">
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
        href="https://drive.google.com/file/d/1UYg4wzn0-01qWauXlJBj43hBRcVB5aqQ/view?usp=sharing"
      />

      <NavbarButton
        icon={faLayerGroup}
        onClick={projectOnClick}
        label="Projects"
      />
    </div>
  )
}
