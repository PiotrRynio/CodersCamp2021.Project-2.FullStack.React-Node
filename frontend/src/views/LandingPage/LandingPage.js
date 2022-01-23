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
} from './LandingPage.styled';

const LandingPage = () => {
  return (
    <Container>
      <LogoSection>
        <Logo>
          Board<LogoSpan>MAP</LogoSpan>
        </Logo>
      </LogoSection>
      <Form>
        <FormText>Get started with us today! Create your account!</FormText>
        <FormID>
          <FormFirstName type="text" name="firstName" placeholder="Enter your first name" />
          <FormLastName type="text" name="lastName" placeholder="Enter your last name" />
        </FormID>
        <FormEmail type="text" name="email" placeholder="Enter your email" />
        <FormPassword type="text" name="password1" placeholder="Enter your password" />
        <FormPassword2 type="text" name="password2" placeholder="Confirm your password" />
        <FormButtons>
          <FormSubmit>Submit!</FormSubmit>
          <FormLink to="home">
            <FormLogIn>Log In</FormLogIn>
          </FormLink>
        </FormButtons>
      </Form>
    </Container>
  );
};

export default LandingPage;
