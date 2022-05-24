import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { Comment } from '../types';

const StyledCommentItem = styled.li`
  position: relative;
  display: flex;
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
  cursor: pointer;
  padding-bottom: 8px;
  box-shadow: 1px 1px 5px 2px #00000012;
`;

const StyledAvatarPreview = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 12px;
  overflow: hidden;
  margin: 12px;
  flex-shrink: 0;
  box-shadow: 1px 1px 5px 2px #00000012;
  cursor: pointer;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledTextContents = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? 'auto' : '92px')};
  display: ${(props) => (props.expanded ? 'block' : '-webkit-box')};
  padding: 12px 12px 12px 4px;
  line-height: 1.2;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  span:first-child {
    font-weight: bold;
  }
  span:last-child {
    font-size: 0.8rem;
    color: #333;
  }
`;

const StyledMessage = styled.p`
  font-size: 0.9rem;
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 1rem;
  cursor: pointer;
`;

const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClickAvatar = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // [To do] 아바타 확대
  };

  const handleClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // [To do] 일촌평 삭제
  };

  return (
    <StyledCommentItem onClick={() => setExpanded((prev) => !prev)}>
      <StyledAvatarPreview onClick={handleClickAvatar}>
        <img
          src={`images/avatar-parts/background/${comment.avatar.background}.png`}
          alt={`background-${comment.avatar.background}`}
        />
        <img
          src={`images/avatar-parts/clothes/${comment.avatar.clothes}.png`}
          alt={`clothes-${comment.avatar.clothes}`}
        />
        <img
          src={`images/avatar-parts/face/${comment.avatar.face}.png`}
          alt={`face-${comment.avatar.face}`}
        />
        <img
          src={`images/avatar-parts/hair/${comment.avatar.hair}.png`}
          alt={`hair-${comment.avatar.hair}`}
        />
      </StyledAvatarPreview>

      <StyledTextContents expanded={expanded}>
        <StyledNameContainer>
          <span>{comment.name}</span>
          <span>{comment.nickname}</span>
        </StyledNameContainer>
        <StyledMessage>{comment.message}</StyledMessage>
      </StyledTextContents>

      <StyledDeleteButton onClick={handleClickDelete}>
        <i className="fa-solid fa-xmark"></i>
      </StyledDeleteButton>
    </StyledCommentItem>
  );
};

export default CommentItem;
