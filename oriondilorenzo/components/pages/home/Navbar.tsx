import { Button } from '@/components/ui/Button'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
  faFilePdf,
  faEnvelope,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar({ projectOnClick }) {
  return (
    <div className="flex flex-row sm:flex-col w-full [&>*]:h-[90%]  sm:[&>*]:h-1/6 sm:[&>*]:m-4 h-full items-center justify-between">
      <a href="https://github.com/mikufan76">
        <FontAwesomeIcon icon={faGithub} className="h-5/6" />
      </a>
      <a href="https://www.linkedin.com/in/orion-dilorenzo/">
        <FontAwesomeIcon className="h-full" icon={faLinkedinIn} />
      </a>
      <a href="mailto:oriondilorenzo@proton.me">
        <FontAwesomeIcon icon={faEnvelope} className="h-5/6" />
      </a>
      <a href="https://drive.google.com/file/d/1UYg4wzn0-01qWauXlJBj43hBRcVB5aqQ/view?usp=sharing">
        <FontAwesomeIcon icon={faFilePdf} className="h-5/6" />
      </a>
      <FontAwesomeIcon icon={faBook} className="h-5/6 hover:cursor-pointer" />
    </div>
  )
}
