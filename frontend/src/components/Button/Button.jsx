import { AiOutlineSend } from 'react-icons/ai';
import { StyledButton } from './Button.styled';

export const Button = ({ callback, text }) => {
  return (
    <StyledButton>
      {text}
      <AiOutlineSend onClick={callback} />
    </StyledButton>
  );
};
