import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return createPortal(
    children,
    document.getElementById('modal') as HTMLDivElement
  );
};

export default Portal;
