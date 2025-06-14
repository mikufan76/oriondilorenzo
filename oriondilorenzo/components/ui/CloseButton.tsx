import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CloseButtonProps = {
  onClick?: () => void;
};

export default function CloseButton(props: CloseButtonProps) {
  return (
    <button
      onClick={props?.onClick}
      className="absolute right-4 top-4 flex aspect-square h-min w-min p-1 items-center justify-center rounded bg-bg text-primary border-primary border-2  transition-colors hover:bg-primary hover:text-bg text-bold"
    >
      <FontAwesomeIcon icon={faX} className="h-4 w-4 aspect-square" />
      <span className="sr-only">Close</span>
    </button>
  );
}
