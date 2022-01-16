import { useState } from 'react';
import { StyledUserAvatar } from './UserAvatar.styled';

export const UserAvatar = ({ userAvatarImage }) => {
  const [avatarUrl, setAvatarUrl] = useState(userAvatarImage);

  return <StyledUserAvatar data-testid="userAvatar" src={avatarUrl} alt="User avatar" />;
};
