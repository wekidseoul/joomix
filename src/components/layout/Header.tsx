import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 1.2rem;
  background-color: salmon;
  box-shadow: 0px 1px 1px 1px #00000005;
`;

const Header = () => {
  return <StyledHeader>㈜님을찾orㅅㅓ™</StyledHeader>;
};

export default Header;
