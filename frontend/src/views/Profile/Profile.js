import React from 'react';
import { Container, LogOut } from './Profile.styled';
import { UserContext } from '../App/App';
import { useContext } from 'react';

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
