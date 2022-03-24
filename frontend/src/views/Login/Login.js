import React, { useState } from 'react';
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
import { useMutation } from 'react-query';
import { REST_API_URL } from '../../constants/restApiPaths';

const LogIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const { mutate } = useMutation(async (loginData) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
      credentials: 'include',
    };
    const loginUrl = `${REST_API_URL}/log-in`;
    const response = await fetch(loginUrl, requestOptions);
    const jsonRes = await response.json();
    if (response.ok) {
      setUser({
        id: jsonRes.userId,
        loggedIn: jsonRes.authorized,
      });
      navigate(`/`);
    } else {
      window.alert(`Wrong email or password. Try again!`);
    }
  });

  const onSubmitButtonClick = () => {
    const loginData = {
      password: password,
      email: login,
    };

    mutate(loginData);
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
          <FormEmail
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setLogin(e.target.value)}
          />
          <FormPassword
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

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
