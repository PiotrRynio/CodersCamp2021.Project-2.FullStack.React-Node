import { Container } from './Profile.styled';
import UserProfile from 'components/UserProfile/UserProfile';
import Logout from 'components/LogoutButton/LogoutButton';

const Profile = () => {
  return (
    <Container>
      <UserProfile />
      <Logout />
    </Container>
  );
};

export default Profile;
