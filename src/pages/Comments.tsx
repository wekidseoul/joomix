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
import { ReactComponent as Spinner } from '../assets/image/spinner.svg';

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
  const [loading, setLoading] = useState(false);
  const [isNewCommentOpen, setIsNewCommentOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const { avatar } = useContext(ctx);

  const getCommentList = async () => {
    setLoading(true);
    const commentsArray: Comment[] = [];
    const querySnapshot = await getDocs(collection(db, 'comments'));
    querySnapshot.forEach((doc) =>
      commentsArray.push({ ...(doc.data() as Comment), id: doc.id })
    );
    setComments(commentsArray);
    setLoading(false);
  };

  useEffect(() => {
    getCommentList();
  }, [isNewCommentOpen]);

  useEffect(() => {
    if (isNewCommentOpen || isPreviewOpen)
      document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isNewCommentOpen, isPreviewOpen]);

  return (
    <StyledComments>
      <StyledTitle>자신만의 ㈜를 찾은 신자들의 간증문입니다.</StyledTitle>

      <StyledButtons>
        <Button text="나의 ㈜님 보기" onClick={() => setIsPreviewOpen(true)} />
        <Button text="간증하기" onClick={() => setIsNewCommentOpen(true)} />
      </StyledButtons>

      {loading ? <Spinner /> : <CommentList comments={comments} />}

      {isNewCommentOpen && (
        <Modal closeModal={() => setIsNewCommentOpen(false)}>
          <NewComment closeModal={() => setIsNewCommentOpen(false)} />
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
