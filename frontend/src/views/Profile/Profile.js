import React from 'react';
import { Container, LogOut } from './Profile.styled';
import { useContext } from 'react';
import { UserContext } from 'providers/AppProviders';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Container>
      <LogOut
        onClick={() => {
          if (!user.loggedIn) return;
          setUser({ userId: 0, loggedIn: false });
        }}
      >
        WYLOGUJ
      </LogOut>
    </Container>
  );
};

export default Profile;
