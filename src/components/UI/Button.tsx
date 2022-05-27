import styled from 'styled-components';

const StyledButton = styled.button<{ disabled: boolean }>`
  display: block;
  background-color: ${(props) => (props.disabled ? '#aaa' : '#fff')};
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 1px 1px 5px 2px #00000020;
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
`;

const Button: React.FC<{
  text: string;
  onClick: any;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}> = ({ text, onClick, type, disabled }) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={!!disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
