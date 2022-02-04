import {
  Container,
  Logo,
  RecoverPasswordForm,
  LogoSpan,
  LogoContainer,
  FormText,
  EmailPlaceholder,
  SubmitButton,
} from './RecoverPassword.styled';

const RecoverPassword = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo to="/log-in">
          Board<LogoSpan>MAP</LogoSpan>
        </Logo>
      </LogoContainer>
      <RecoverPasswordForm>
        <FormText>
          Enter Your E-mail to recover password!
          <EmailPlaceholder placeholder="Enter your email" />
        </FormText>
        <SubmitButton>Submit!</SubmitButton>
      </RecoverPasswordForm>
    </Container>
  );
};

export default RecoverPassword;
