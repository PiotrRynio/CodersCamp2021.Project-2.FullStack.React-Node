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
} from './SignUp.styled';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

const SignUp = () => {
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
          <FormPassword type="password" name="password" placeholder="Password" />
          <FormPassword2
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
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

export default SignUp;
