import { useState } from 'react';
import { StyledUserAvatar } from './UserAvatar.styled';

//TODO: Just a mockup, needed change to real data
export const UserAvatar = ({ userAvatarImage }) => {
  const [avatarUrl, setAvatarUrl] = useState(userAvatarImage);

  return <StyledUserAvatar className="avatar" src={avatarUrl} alt="User avatar" />;
};
