import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef } from 'react';

export default function Icon(props: { icon: any; [key: string]: any }) {
  return <FontAwesomeIcon {...props} />;
}
