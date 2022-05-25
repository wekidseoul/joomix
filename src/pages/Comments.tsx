import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CommentList from '../components/CommentList';
import NewComment from '../components/NewComment';
import Modal from '../components/UI/Modal';

const COMMENTS = [
  {
    name: '바오로',
    id: '1',
    nickname: '㈜님만바라봅니다',
    avatar: {
      background: '1',
      clothes: '4',
      face: '3',
      hair: '2',
    },
    message: '㈜님 저를 악에서 구하시옵고...',
    password: 'password',
  },
  {
    name: '윤칠범',
    id: '2',
    nickname: '요한',
    avatar: {
      background: '2',
      clothes: '5',
      face: '4',
      hair: '1',
    },
    message:
      '제 코메디언 인생에 빛이 되어주신 ㈜님. 한평생 그리고 사후세계에서도 당신만을 따르겠습니다. 하늘 아래 경건히 맹세하오니 미천한 저를 돌봐주시옵소서.',
    password: '1234',
  },
];

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
  button {
    display: block;
    background: #fff;
    color: #000000;
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
      <StyledTitle>자신만의 ㈜를 찾은 신자들의 간증문입니다.</StyledTitle>

      <StyledButtons>
        <button onClick={() => navigate('/')}>개종하기</button>
        <button onClick={() => setIsModalOpen(true)}>간증문 작성</button>
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
