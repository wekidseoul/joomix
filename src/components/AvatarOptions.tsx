import styled from 'styled-components';
import { AvatarPart, Option, Avatar } from '../types';

const StyledAvatarOptions = styled.div`
  margin-bottom: 12px;
  max-width: 100vw;
`;
const StyledTitle = styled.h3`
  text-align: center;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const StyledOptionList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  max-width: 100vw;
  margin: 0 auto;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledOptionItem = styled.li<{ active: boolean }>`
  width: 48px;
  cursor: pointer;
  img {
    width: 48px;
    height: 48px;
    border: ${(props) => (props.active ? '1px solid #fff' : 'none')};
  }
`;

const PartInKorean = {
  background: '배경 background',
  clothes: '의상 clothes',
  face: '얼굴 face',
  hair: '머리 hair',
};

const AvatarOptions: React.FC<{
  part: AvatarPart;
  options: Option[];
  selectedOptions: Avatar;
  onChange: (part: AvatarPart, selectedKey: string) => void;
}> = ({ part, options, selectedOptions, onChange }) => {
  return (
    <StyledAvatarOptions>
      <StyledTitle>{PartInKorean[part]}</StyledTitle>
      <StyledOptionList>
        {options.map((option) => (
          <StyledOptionItem
            key={`${part}-${option.key}`}
            onClick={() => onChange(part, option.key)}
            active={selectedOptions[part] === option.key}
          >
            <img
              src={`images/avatar-parts/${part}/${option.key}.png`}
              alt={`${part}-${option.key}`}
            />
          </StyledOptionItem>
        ))}
      </StyledOptionList>
    </StyledAvatarOptions>
  );
};

export default AvatarOptions;
