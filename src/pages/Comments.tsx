import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../fb';

import { Comment } from '../types';
import { ctx } from '../context';

import CommentList from '../components/CommentList';
import NewComment from '../components/NewComment';
import AvatarPreview from '../components/AvatarPreview';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

const StyledComments = styled.div`
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
  width: fit-content;
  margin: 12px auto 36px;
`;

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isNewCommentOpen, setIsNewCommentOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const { avatar } = useContext(ctx);

  const getCommentList = async () => {
    const commentsArray: Comment[] = [];
    const querySnapshot = await getDocs(collection(db, 'comments'));
    querySnapshot.forEach((doc) => commentsArray.push(doc.data() as Comment));
    setComments(commentsArray);
  };

  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <StyledComments>
      <StyledTitle>자신만의 ㈜를 찾은 신자들의 간증문입니다.</StyledTitle>

      <StyledButtons>
        <Button text="나의 ㈜님 보기" onClick={() => setIsPreviewOpen(true)} />
        <Button text="간증하기" onClick={() => setIsNewCommentOpen(true)} />
      </StyledButtons>

      <CommentList comments={comments} />
      {isNewCommentOpen && (
        <Modal closeModal={() => setIsNewCommentOpen(false)}>
          <NewComment />
        </Modal>
      )}
      {isPreviewOpen && (
        <Modal closeModal={() => setIsPreviewOpen(false)}>
          <AvatarPreview selectedOptions={avatar} isModal={true} />
        </Modal>
      )}
    </StyledComments>
  );
};

export default Comments;
