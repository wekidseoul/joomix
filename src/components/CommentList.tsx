import styled from 'styled-components';

import { Comment } from '../types';

import CommentItem from './CommentItem';

const StyledCommentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <StyledCommentList>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </StyledCommentList>
  );
};

export default CommentList;
