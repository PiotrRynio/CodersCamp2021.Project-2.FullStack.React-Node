import { FaCamera } from 'react-icons/fa';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import { SubscribedBoardsList } from 'components/SubscribedBoardsList/SubscribedBoardsList';
import {
  Container,
  UserBackground,
  UserAvatarContainer,
  UserAvatarEditButton,
  UserName,
  UserBoardsAmount,
  TextBold,
} from 'components/UserProfile/UserProfile.styled';

const UserProfile = () => {
  return (
    <Container>
      <UserBackground />
      <UserAvatarContainer>
        <UserAvatar />
        <UserAvatarEditButton>
          <FaCamera />
        </UserAvatarEditButton>
      </UserAvatarContainer>
        <UserName>User_Name</UserName>
        <UserBoardsAmount>
          <TextBold>8</TextBold>&nbsp;Boards Followed
        </UserBoardsAmount>
      <SubscribedBoardsList />
    </Container>
  );
};

export default UserProfile;
