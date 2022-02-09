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
  RecoverPasswordText,
  RecoverSpan,
} from './Login.styled';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { UserContext } from 'providers/AppProviders';

const LogIn = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmitButtonClick = () => {
    if (user.loggedIn) return;
    setUser({ loggedIn: true });

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
          <FormPassword type="password" name="password1" placeholder="Password" />

          <FormButtons>
            <FormSubmit onClick={onSubmitButtonClick}>Submit!</FormSubmit>

            <FormLink to="/sign-up">
              <FormLogIn>Sign up!</FormLogIn>
            </FormLink>
          </FormButtons>

          <RecoverPassword>
            <RecoverPasswordText to="/recover-password">
              Have you forgotten your password?
              <br />
              <RecoverSpan>Get it back!</RecoverSpan>
            </RecoverPasswordText>
          </RecoverPassword>
        </InputsWrapper>
      </Form>
    </Container>
  );
};

export default LogIn;
