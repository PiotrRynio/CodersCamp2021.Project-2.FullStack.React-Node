import React from 'react';
import {
  Container,
  LogoSection,
  Form,
  Logo,
  LogoSpan,
  FormText,
  FormEmail,
  FormID,
  FormLastName,
  FormFirstName,
  FormPassword,
  FormPassword2,
  FormButtons,
  FormLink,
  FormLogIn,
  FormSubmit,
} from './SignIn.styled';

const SignIn = () => {
  return (
    <Container>
      <LogoSection>
        <Logo to="/">
          Board<LogoSpan>MAP</LogoSpan>
        </Logo>
      </LogoSection>
      <Form>
        <FormText>
          Get started with us today!
          <br /> Create your account!
        </FormText>
        <FormID>
          <FormFirstName type="text" name="firstName" placeholder="Enter your first name" />
          <FormLastName type="text" name="lastName" placeholder="Enter your last name" />
        </FormID>
        <FormEmail type="text" name="email" placeholder="Enter your email" />
        <FormPassword type="text" name="password1" placeholder="Enter your password" />
        <FormPassword2 type="text" name="password2" placeholder="Confirm your password" />
        <FormButtons>
          <FormLink to="/">
            <FormSubmit>Submit!</FormSubmit>
          </FormLink>

          <FormLink to="/log-in">
            <FormLogIn>Log In</FormLogIn>
          </FormLink>
        </FormButtons>
      </Form>
    </Container>
  );
};

export default SignIn;
