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
  padding: 24px 12px 40px;
`;

const StyledTitle = styled.h2`
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 24px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 36px;
  button {
    background: #fff;
    color: #000000;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    box-shadow: 1px 1px 5px 2px #00000020;
    cursor: pointer;
  }
`;

const GenerateAvatar = () => {
  const { avatar, setAvatar } = useContext(ctx);
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState<Avatar>(avatar);

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

  const handleSubmit = () => {
    if (
      Object.values(selectedOptions).findIndex(
        (option) => option === 'default'
      ) !== -1
    )
      return;
    setAvatar(selectedOptions);
    navigate('/comments');
  };

  return (
    <StyledGenerateAvatar>
      <StyledTitle>당신의 ㈜님은 어떤 모습을 하고 계십니까?</StyledTitle>

      <AvatarPreview selectedOptions={selectedOptions} />

      <StyledButtons>
        <button onClick={shuffleAvatar}>랜덤</button>
        <button onClick={handleSubmit}>완료</button>
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
