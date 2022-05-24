import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: salmon;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-align: center;
  height: 120px;
  font-size: 0.8rem;
`;

const StyledLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  li {
    font-size: 1.2rem;
    i {
      color: #000;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>주현영 배우님을 너-무 싸란해서 만든 웨브 싸이트 이무니다.</p>
      <StyledLinks>
        <li>
          <a href="https://www.instagram.com/2ruka__">
            <i className="fa-solid fa-heart"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/wekidseoul/findmylord">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/w.e.k.i.d/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </StyledLinks>
      <small>&copy; Copyright 2022, WE-KID</small>
    </StyledFooter>
  );
};

export default Footer;
