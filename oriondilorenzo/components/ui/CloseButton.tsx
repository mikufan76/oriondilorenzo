import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CloseButtonProps = {
  onClick?: () => void;
};

export default function CloseButton(props: CloseButtonProps) {
  return (
    <button
      onClick={props?.onClick}
      className="text-bold absolute right-4 top-4 flex aspect-square h-min w-min items-center justify-center rounded border-2 border-primary bg-bg p-1 text-primary transition-colors hover:bg-primary hover:text-bg"
    >
      <FontAwesomeIcon icon={faX} className="aspect-square h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  );
}
