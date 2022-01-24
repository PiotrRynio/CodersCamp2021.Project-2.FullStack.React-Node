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
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { UserContext } from '../App/App';

const LogIn = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
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

        <FormEmail type="text" name="email" placeholder="Enter your email" />
        <FormPassword type="text" name="password1" placeholder="Enter your password" />

        <FormButtons>
          <FormSubmit
            onClick={() => {
              if (user.loggedIn) return;
              setUser({ loggedIn: true });

              if (location.state?.from) {
                navigate(location.state.from);
              }
            }}
          >
            Submit!
          </FormSubmit>

          <FormLink to="/sign-up">
            <FormLogIn>Sign up!</FormLogIn>
          </FormLink>
        </FormButtons>
      </Form>
    </Container>
  );
};

export default LogIn;
