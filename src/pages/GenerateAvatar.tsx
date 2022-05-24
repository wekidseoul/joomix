import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BackgroundOptions from '../assets/json/avatar-parts/background.json';
import ClothesOptions from '../assets/json/avatar-parts/clothes.json';
import FaceOptions from '../assets/json/avatar-parts/face.json';
import HairOptions from '../assets/json/avatar-parts/hair.json';
import { AvatarPart, Avatar } from '../types';
import { ctx } from '../context';

import AvatarOptions from '../components/AvatarOptions';
import AvatarPreview from '../components/AvatarPreview';

const StyledGenerateAvatar = styled.main`
  padding: 24px 8px 40px;
`;

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
  const { options, setOptions } = useContext(ctx);
  const navigate = useNavigate();

  const [selectedOptions, setAvatar] = useState<Avatar>(options);

  const handleChangeOption = (part: AvatarPart, selectedKey: string) => {
    setAvatar((prev) => ({ ...prev, [part]: selectedKey }));
  };

  const shuffleAvatar = () => {
    setAvatar({
      background:
        BackgroundOptions[Math.floor(Math.random() * BackgroundOptions.length)]
          .key,
      clothes:
        ClothesOptions[Math.floor(Math.random() * ClothesOptions.length)].key,
      face: FaceOptions[Math.floor(Math.random() * FaceOptions.length)].key,
      hair: HairOptions[Math.floor(Math.random() * HairOptions.length)].key,
    });
  };

  const handleSubmit = () => {
    if (
      Object.values(selectedOptions).findIndex(
        (option) => option === 'default'
      ) !== -1
    )
      return;
    setOptions(selectedOptions);
    navigate('/comments');
  };

  return (
    <StyledGenerateAvatar>
      <AvatarPreview selectedOptions={selectedOptions} />

      <StyledButtons>
        <button onClick={shuffleAvatar}>Shuffle</button>
        <button onClick={handleSubmit}>Done</button>
      </StyledButtons>

      <div>
        <AvatarOptions
          part="background"
          options={BackgroundOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
        />
        <AvatarOptions
          part="hair"
          options={HairOptions}
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
          part="clothes"
          options={ClothesOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
        />
      </div>
    </StyledGenerateAvatar>
  );
};

export default GenerateAvatar;
