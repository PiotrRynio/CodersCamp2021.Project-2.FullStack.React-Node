import { useState } from 'react';
import { StyledUserAvatarContainer } from './UserAvatar.styled';

//TODO: Just a mockup, needed change to real data
export const UserAvatar = ({ userId }) => {
  const [avatarUrl, setAvatarUrl] = useState('');

  return (
    <StyledUserAvatarContainer>
      <img className="avatar" src="../../../sample-avatar.jpg" alt="User avatar" />
    </StyledUserAvatarContainer>
  );
};
