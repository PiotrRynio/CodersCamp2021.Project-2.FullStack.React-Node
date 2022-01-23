import React from 'react';
import {
  Container,
  LogoSection,
  Form,
  Logo,
  LogoSpan,
  FormText,
  FormEmail,
  FormPassword,
  FormButtons,
  FormLink,
  FormLogIn,
  FormSubmit,
} from './Login.styled';

const LogIn = () => {
  return (
    <Container>
      <LogoSection>
        <Logo>
          Board<LogoSpan>MAP</LogoSpan>
        </Logo>
      </LogoSection>
      <Form>
        <FormText>
          Welcome on Board<LogoSpan>MAP</LogoSpan>! Please log in.
        </FormText>

        <FormEmail type="text" name="email" placeholder="Enter your email" />
        <FormPassword type="text" name="password1" placeholder="Enter your password" />

        <FormButtons>
          <FormLink to="/">
            <FormSubmit>Submit!</FormSubmit>
          </FormLink>
          <FormLink to="/sign-up">
            <FormLogIn>Sign up!</FormLogIn>
          </FormLink>
        </FormButtons>
      </Form>
    </Container>
  );
};

export default LogIn;
