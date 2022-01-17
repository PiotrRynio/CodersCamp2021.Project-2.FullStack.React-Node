import { useState } from 'react';
import { Avatar } from './UserAvatar.styled';

export const UserAvatar = ({ userAvatarImage }) => {
  return <Avatar data-testid="userAvatar" src={userAvatarImage} alt="User avatar" />;
};
