import { FaCamera } from 'react-icons/fa';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import { SubscribedBoardsList } from 'components/SubscribedBoardsList/SubscribedBoardsList';

import {
  Container,
  UserBackground,
  UserAvatarContainer,
  UserAvatarEditButton,
  UserName,
  BoardListHeader,
  EditBackgroundButton,
} from 'components/UserProfile/UserProfile.styled';

const UserProfile = ({author, avatar}) => {
  return (
    <Container>
      <UserBackground>
        <EditBackgroundButton>Edit background picture&nbsp;<FaCamera /></EditBackgroundButton>
      </UserBackground>
      <UserAvatarContainer>
        <UserAvatar avatar={avatar}/>
        <UserAvatarEditButton>
          <FaCamera />
        </UserAvatarEditButton>
      </UserAvatarContainer>
      <UserName user={author}></UserName>
      <BoardListHeader>Boards</BoardListHeader>
      <SubscribedBoardsList />
    </Container>
  );
};

export default UserProfile;
