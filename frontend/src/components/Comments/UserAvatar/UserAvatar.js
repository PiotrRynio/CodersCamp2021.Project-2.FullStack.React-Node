import { Avatar } from './UserAvatar.styled';

export const UserAvatar = ({ userAvatarImage }) => {
  return <Avatar src={userAvatarImage} alt="User avatar" />;
};
