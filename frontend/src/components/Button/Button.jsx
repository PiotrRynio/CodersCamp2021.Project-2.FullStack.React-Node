import { AiOutlineSend } from 'react-icons/ai';
import { StyledButton } from 'components/Button/Button.styled';

export const Button = ({ callback, buttonName }) => {
  return (
    <StyledButton onClick={callback}>
      {buttonName}
      <AiOutlineSend />
    </StyledButton>
  );
};
