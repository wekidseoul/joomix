import { useContext } from 'react';
import styled from 'styled-components';

import BackgroundOptions from '../assets/json/avatar-parts/background.json';
import ClothesOptions from '../assets/json/avatar-parts/clothes.json';
import FaceOptions from '../assets/json/avatar-parts/face.json';
import HairOptions from '../assets/json/avatar-parts/hair.json';
import { AvatarPart } from '../types';
import { ctx } from '../context';

import AvatarOptions from './AvatarOptions';
import AvatarPreview from './AvatarPreview';

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 36px;
  button {
    background: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
  }
`;

const GenerateAvatar = () => {
  const { selectedOptions, setSelectedOptions } = useContext(ctx);

  const handleChangeOption = (part: AvatarPart, selectedKey: string) => {
    setSelectedOptions((prev) => ({ ...prev, [part]: selectedKey }));
  };

  const shuffleAvatar = () => {
    setSelectedOptions({
      background:
        BackgroundOptions[Math.floor(Math.random() * BackgroundOptions.length)]
          .key,
      clothes:
        ClothesOptions[Math.floor(Math.random() * ClothesOptions.length)].key,
      face: FaceOptions[Math.floor(Math.random() * FaceOptions.length)].key,
      hair: HairOptions[Math.floor(Math.random() * HairOptions.length)].key,
    });
  };

  return (
    <div>
      <AvatarPreview selectedOptions={selectedOptions} />

      <StyledButtons>
        <button onClick={shuffleAvatar}>Shuffle</button>
        <button>Done</button>
      </StyledButtons>

      <div>
        <AvatarOptions
          part="background"
          options={BackgroundOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
        />
        <AvatarOptions
          part="clothes"
          options={ClothesOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
        />
        <AvatarOptions
          part="face"
          options={FaceOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
        />
        <AvatarOptions
          part="hair"
          options={HairOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
        />
      </div>
    </div>
  );
};

export default GenerateAvatar;
