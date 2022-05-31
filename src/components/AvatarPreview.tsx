import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Avatar } from '../types';

import Button from './UI/Button';

const StyledAvatarPreview = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border: 3px solid #000;
  background-color: #fff;
  margin: 0 auto 20px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledButtonContainer = styled.div`
  position: absolute;
  bottom: -48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const AvatarPreview: React.FC<{
  selectedOptions: Avatar;
  isModal?: boolean;
}> = ({ selectedOptions, isModal }) => {
  const navigate = useNavigate();

  return (
    <StyledAvatarPreview>
      <img
        src={`images/avatar-parts/body/${selectedOptions.body}.png`}
        alt={`body-${selectedOptions.body}`}
      />
      <img
        src={`images/avatar-parts/head/${selectedOptions.head}.png`}
        alt={`head-${selectedOptions.head}`}
      />

      {isModal && (
        <StyledButtonContainer>
          <Button text="수정하기" onClick={() => navigate('/')} />
        </StyledButtonContainer>
      )}
    </StyledAvatarPreview>
  );
};

export default AvatarPreview;
