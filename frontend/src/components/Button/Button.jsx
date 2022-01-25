import { StyledButton } from 'components/Button/Button.styled';

export const Button = ({ callback, buttonName, icon }) => {
  return (
    <StyledButton onClick={callback}>
      {buttonName}
      {icon}
    </StyledButton>
  );
};
