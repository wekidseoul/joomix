import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  background: #fff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 1px 1px 5px 2px #00000020;
  cursor: pointer;
`;

const Button: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;