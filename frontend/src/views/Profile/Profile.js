import React from 'react';
import { Container, LogOut } from './Profile.styled';
import { useContext } from 'react';
import { UserContext } from 'providers/AppProviders';
import { useMutation } from 'react-query';
import { REST_API_URL } from '../../constants/restApiPaths';
import { Container } from './Profile.styled';
import UserProfile from 'components/UserProfile/UserProfile';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const { mutate } = useMutation(async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    console.log('HERE');
    const logoutUrl = `${REST_API_URL}/logout`;
    return await fetch(logoutUrl, requestOptions).then(async (response) => {
      if (response.ok) {
        setUser({
          userId: 0,
          loggedIn: false,
        });
      }
    });
  });

  return (
    <Container>
      <UserProfile />
      <LogOut
        onClick={() => {
          if (!user.loggedIn) return;
          mutate();
        }}
      >
        WYLOGUJ
      </LogOut>
    </Container>
  );
};

export default Profile;
