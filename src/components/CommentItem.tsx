import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { Comment } from '../types';

import AvatarPreview from './AvatarPreview';
import Modal from './UI/Modal';

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
  background-color: #fff;
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
  height: ${(props) => (props.expanded ? 'auto' : '94px')};
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
  margin-bottom: 2px;
  span:first-child {
    font-weight: bold;
  }
  span:last-child {
    font-size: 0.8rem;
    color: #333;
  }
`;

const StyledDate = styled.p`
  font-size: 0.8rem;
  color: #333;
  margin-bottom: 4px;
`;

const StyledMessage = styled.p`
  font-size: 0.9rem;
`;

const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  const [expanded, setExpanded] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleClickAvatar = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsPreviewOpen(true);
  };

  return (
    <StyledCommentItem onClick={() => setExpanded((prev) => !prev)}>
      <StyledAvatarPreview onClick={handleClickAvatar}>
        <img
          src={`images/avatar-parts/body/${comment.avatar.body}.png`}
          alt={`body-${comment.avatar.body}`}
        />
        <img
          src={`images/avatar-parts/head/${comment.avatar.head}.png`}
          alt={`head-${comment.avatar.head}`}
        />
      </StyledAvatarPreview>

      <StyledTextContents expanded={expanded}>
        <StyledNameContainer>
          <span>{comment.name}</span>
          <span>{comment.nickname}</span>
        </StyledNameContainer>
        <StyledDate>
          {new Date(comment.regDate!).toLocaleString('KO-KR')}
        </StyledDate>
        <StyledMessage>{comment.message}</StyledMessage>
      </StyledTextContents>

      {isPreviewOpen && (
        <Modal closeModal={() => setIsPreviewOpen(false)}>
          <AvatarPreview selectedOptions={comment.avatar} />
        </Modal>
      )}
    </StyledCommentItem>
  );
};

export default CommentItem;
