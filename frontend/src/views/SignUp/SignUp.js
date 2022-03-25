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
import { ErrorMessage } from '@hookform/error-message';
import { REST_API_URL } from '../../constants/restApiPaths';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = useMutation((newUserData) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUserData),
    };
    return fetch(`${REST_API_URL}/sign-up`, requestOptions).then(async (response) => {
      await response.json();
      if (response.ok) {
        window.alert("Account created correctly! Let's logIn!");
        navigate(`/log-in`);
      }
    });
  });

  const submitHandler = (formData) => {
    mutate(formData);
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
          Get started with us today!
          <br /> Create your account!
        </FormText>
        <InputsWrapper onSubmit={handleSubmit(submitHandler)}>
          <FormFirstName
            placeholder="First name"
            {...register('firstName', {
              required: 'This is required.',
              pattern: {
                value: /.*[^\s].*/,
                message: "First name can't contain only whitespaces.",
              },
              maxLength: {
                value: 32,
                message: 'This input exceed max length (32).',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => <p>{message}</p>}
          />
          <FormLastName
            placeholder="Last name"
            {...register('lastName', {
              required: 'This is required.',
              pattern: {
                value: /.*[^\s].*/,
                message: "First name can't contain only whitespaces.",
              },
              maxLength: {
                value: 32,
                message: 'This input exceed max length (32).',
              },
            })}
          />

          <FormEmail
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'This is required.',
              maxLength: {
                value: 64,
                message: 'This input exceed max length (64).',
              },
            })}
          />
          <FormPassword
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'This is required.',
              minLength: 8,
              maxLength: {
                value: 32,
                message: 'This input exceed max length (32).',
              },
            })}
          />
          <FormPassword2
            type="password"
            placeholder="Confirm your password"
            {...register('confirmPassword', {
              required: 'This is required.',
              minLength: 8,
              maxLength: {
                value: 32,
                message: 'This input exceed max length (32).',
              },
            })}
          />

          <FormSubmit type="submit">Submit!</FormSubmit>
        </InputsWrapper>
        <FormLink to="/log-in">
          <FormLogIn>Log In</FormLogIn>
        </FormLink>
      </Form>
    </Container>
  );
};

export default SignUp;
