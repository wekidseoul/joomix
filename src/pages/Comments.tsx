import styled from 'styled-components';
import CommentList from '../components/CommentList';
import NewComment from '../components/NewComment';

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
  padding: 24px 8px 40px;
`;

const Comments = () => {
  return (
    <StyledComments>
      <NewComment />
      <CommentList comments={COMMENTS} />
    </StyledComments>
  );
};

export default Comments;
