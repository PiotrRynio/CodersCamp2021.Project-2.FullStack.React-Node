import { useState } from 'react';
import { StyledUserAvatarContainer } from './UserAvatar.styled';

//TODO: Just a mockup, needed change to real data
export const UserAvatar = ({ userAvatarUrl }) => {
  const [avatarUrl, setAvatarUrl] = useState(userAvatarUrl);

  return (
    <StyledUserAvatarContainer>
      <img className="avatar" src={userAvatarUrl} alt="User avatar" />
    </StyledUserAvatarContainer>
  );
};
