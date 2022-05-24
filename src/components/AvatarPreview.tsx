import styled from 'styled-components';
import { SelectedOptions } from '../types';

const StyledAvatarPreview = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border: 3px solid #000;
  margin: 0 auto 20px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const AvatarPreview: React.FC<{ selectedOptions: SelectedOptions }> = ({
  selectedOptions,
}) => {
  return (
    <StyledAvatarPreview>
      <img
        src={`images/avatar-parts/background/${selectedOptions.background}.png`}
        alt={`background-${selectedOptions.background}`}
      />
      <img
        src={`images/avatar-parts/clothes/${selectedOptions.clothes}.png`}
        alt={`clothes-${selectedOptions.clothes}`}
      />
      <img
        src={`images/avatar-parts/face/${selectedOptions.face}.png`}
        alt={`face-${selectedOptions.face}`}
      />
      <img
        src={`images/avatar-parts/hair/${selectedOptions.hair}.png`}
        alt={`hair-${selectedOptions.hair}`}
      />
    </StyledAvatarPreview>
  );
};

export default AvatarPreview;
