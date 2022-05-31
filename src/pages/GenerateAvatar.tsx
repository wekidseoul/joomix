import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import HeadOptions from '../assets/json/avatar-parts/head.json';
import BodyOptions from '../assets/json/avatar-parts/body.json';
import { AvatarPart, Avatar } from '../types';
import { getRandomNumber, wait } from '../utils';
import { ctx } from '../context';

import AvatarOptions from '../components/AvatarOptions';
import AvatarPreview from '../components/AvatarPreview';
import Button from '../components/UI/Button';

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
`;

const GenerateAvatar = () => {
  const [loading, setLoading] = useState(false);
  const { avatar, setAvatar } = useContext(ctx);
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState<Avatar>(avatar);

  const handleChangeOption = (part: AvatarPart, selectedKey: string) => {
    setSelectedOptions((prev) => ({ ...prev, [part]: selectedKey }));
  };

  const shufflePart = async (
    key: AvatarPart,
    options: { key: string; name: string }[]
  ) => {
    for (let i = 0; i < 12; i++) {
      setSelectedOptions((prev) => {
        return {
          ...prev,
          [key]: options[getRandomNumber(options.length)].key,
        };
      });
      await wait(50);
    }
  };

  const shuffleAvatar = async () => {
    if (loading) return;
    setLoading(true);
    shufflePart('head', HeadOptions);
    await shufflePart('body', BodyOptions);
    setLoading(false);
  };

  const handleSubmit = () => {
    if (
      Object.values(selectedOptions).findIndex(
        (option) => option === 'default'
      ) !== -1
    )
      return;
    setAvatar(selectedOptions);
    sessionStorage.setItem('avatar', JSON.stringify(selectedOptions));
    navigate('/comments');
  };

  useEffect(() => {
    setSelectedOptions(avatar);
  }, [avatar]);

  return (
    <StyledGenerateAvatar>
      <StyledTitle>아휴 그림이 누추하지만 마음껏 섞어 보세요</StyledTitle>

      <AvatarPreview selectedOptions={selectedOptions} />

      <StyledButtons>
        <Button text="랜덤 생성" onClick={shuffleAvatar} />
        <Button
          text="생성 완료"
          onClick={handleSubmit}
          disabled={
            loading ||
            Object.values(selectedOptions).findIndex(
              (option) => option === 'default'
            ) !== -1
          }
        />
      </StyledButtons>

      <div>
        <AvatarOptions
          part="head"
          options={HeadOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
          disabled={loading}
        />
        <AvatarOptions
          part="body"
          options={BodyOptions}
          selectedOptions={selectedOptions}
          onChange={handleChangeOption}
          disabled={loading}
        />
      </div>
    </StyledGenerateAvatar>
  );
};

export default GenerateAvatar;
