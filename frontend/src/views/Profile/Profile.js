import React from 'react';
import { Container, LogOut } from './Profile.styled';
import { useContext } from 'react';
import { UserContext } from 'components/Providers/Providers';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Container>
      <LogOut
        onClick={() => {
          if (!user.loggedIn) return;
          setUser({ loggedIn: false });
        }}
      >
        WYLOGUJ
      </LogOut>
    </Container>
  );
};

export default Profile;
