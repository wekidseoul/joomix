import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CommentList from '../components/CommentList';
import NewComment from '../components/NewComment';
import Modal from '../components/UI/Modal';

const COMMENTS = [
  {
    name: '이름',
    id: '1',
    nickname: '일촌명',
    avatar: {
      background: '1',
      clothes: '4',
      face: '3',
      hair: '2',
    },
    message: '이것은 일촌평입니다 !!',
    password: 'password',
  },
  {
    name: '머저리',
    id: '2',
    nickname: '모모랜드',
    avatar: {
      background: '2',
      clothes: '5',
      face: '4',
      hair: '1',
    },
    message:
      '머저리가 남기는 일촌평입니다 ㅋㅋㅋ !!머저리가 남기는 일촌평입니다 ㅋㅋㅋ !!머저리가 남기는 일촌평입니다 ㅋㅋㅋ !!머저리가 남기는 일촌평입니다 ㅋㅋㅋ !!머저리가 남기는 일촌평입니다 ㅋㅋㅋ',
    password: '1234',
  },
];

const StyledComments = styled.div`
  padding: 24px 12px 40px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 36px;
  width: fit-content;
  margin: 12px auto 36px;
  button {
    display: block;
    background: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    box-shadow: 1px 1px 5px 2px #00000020;
    cursor: pointer;
  }
`;

const Comments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <StyledComments>
      <StyledButtons>
        <button onClick={() => navigate('/')}>개종하기</button>
        <button onClick={() => setIsModalOpen(true)}>일촌평 쓰기</button>
      </StyledButtons>

      <CommentList comments={COMMENTS} />
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <NewComment />
        </Modal>
      )}
    </StyledComments>
  );
};

export default Comments;
