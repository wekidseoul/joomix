import { ReactNode } from 'react';
import styled from 'styled-components';

import Portal from './Portal';

const StyledModal = styled(Portal)`
  background-color: #00000050;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBackdrop = styled.div`
  background-color: #00000090;
  backdrop-filter: blur(1px);
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
`;

const StyledContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
`;

const Modal: React.FC<{ closeModal: () => void; children: ReactNode }> = ({
  closeModal,
  children,
}) => {
  return (
    <StyledModal>
      <StyledBackdrop onClick={closeModal} />
      <StyledContents>{children}</StyledContents>
    </StyledModal>
  );
};

export default Modal;
