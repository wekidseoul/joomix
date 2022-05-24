import styled from 'styled-components';
import GenerateAvatar from '../components/GenerateAvatar';

const StyledHome = styled.div`
  padding: 24px 0 40px;
`;

const Home = () => {
  return (
    <StyledHome>
      <GenerateAvatar />
    </StyledHome>
  );
};

export default Home;
