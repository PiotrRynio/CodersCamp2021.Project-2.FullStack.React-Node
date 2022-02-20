import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import { Container, UserBackground } from 'components/UserProfile/UserProfile.styled';

const UserProfile = () => {
  return (
    <Container>
      <UserBackground />
      <UserAvatar />
    </Container>
  );
};

export default UserProfile;
