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
        <InputsWrapper>
          <FormID>
            <FormFirstName type="text" name="firstName" placeholder="First name" />
            <FormLastName type="text" name="lastName" placeholder="Last name" />
          </FormID>
          <FormEmail type="text" name="email" placeholder="Email" />
          <FormPassword type="password" name="password1" placeholder="Password" />
          <FormPassword2 type="password" name="password2" placeholder="Confirm your password" />
          <FormButtons>
            <FormLink to="/">
              <FormSubmit>Submit!</FormSubmit>
            </FormLink>

            <FormLink to="/log-in">
              <FormLogIn>Log In</FormLogIn>
            </FormLink>
          </FormButtons>
        </InputsWrapper>
      </Form>
    </Container>
  );
};

export default SignIn;
