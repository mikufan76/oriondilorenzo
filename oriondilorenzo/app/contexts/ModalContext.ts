import { createContext } from 'react';
import { noop } from 'sanity';

const ModalContext = createContext<any>(noop);

export default ModalContext;
