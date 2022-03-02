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
  BoardListHeader,
  EditBackgroundButton,
} from 'components/UserProfile/UserProfile.styled';

const UserProfile = () => {
  return (
    <Container>
      <UserBackground>
        <EditBackgroundButton>Edit background picture&nbsp;<FaCamera /></EditBackgroundButton>
      </UserBackground>
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
      <BoardListHeader>Boards</BoardListHeader>
      <SubscribedBoardsList />
    </Container>
  );
};

export default UserProfile;
