import React from 'react';
import {
  Container,
  LogoSection,
  Form,
  InputsWrapper,
  Logo,
  LogoSpan,
  FormText,
  FormEmail,
  FormPassword,
  FormButtons,
  FormLink,
  FormLogIn,
  FormSubmit,
  RecoverPassword,
  RecoverPasswordHint,
  RecoverLink,
} from './Login.styled';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { UserContext } from 'providers/AppProviders';

const LogIn = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmitButtonClick = () => {
    if (user.loggedIn) {
      return;
    }
    setUser({ userId: 1, loggedIn: true });

    if (location.state?.from) {
      navigate(location.state.from);
    }
  };

  return (
    <Container>
      <LogoSection>
        <Logo to="/">
          Board<LogoSpan>MAP</LogoSpan>
        </Logo>
      </LogoSection>
      <Form>
        <FormText>
          Welcome on Board<LogoSpan>MAP</LogoSpan>! <br />
          Please log in.
        </FormText>
        <InputsWrapper>
          <FormEmail type="text" name="email" placeholder="Email" />
          <FormPassword type="password" name="password" placeholder="Password" />

          <FormButtons>
            <FormSubmit onClick={onSubmitButtonClick}>Submit!</FormSubmit>

            <FormLink to="/sign-up">
              <FormLogIn>Sign up!</FormLogIn>
            </FormLink>
          </FormButtons>

          <RecoverPassword>
            <RecoverPasswordHint>Have you forgotten your password?</RecoverPasswordHint>
            <RecoverLink to="/recover-password">Get it back!</RecoverLink>
          </RecoverPassword>
        </InputsWrapper>
      </Form>
    </Container>
  );
};

export default LogIn;
