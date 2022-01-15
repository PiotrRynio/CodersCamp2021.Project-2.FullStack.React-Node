import {
  StyledCommentContainer,
  StyledLeftSection,
  StyledRightSection,
} from './UserComment.styled';
import { useState } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

export const UserComment = ({ comment }) => {
  const [userComment, setComment] = useState(comment);

  return (
    <StyledCommentContainer>
      <StyledLeftSection>
        <UserAvatar userAvatarUrl={userComment.author.avatarUrl} />
      </StyledLeftSection>
      <StyledRightSection>
        <div className="userName">
          {userComment.author.firstName} {userComment.author.lastName}
        </div>
        <div className="date">
          {new Date(userComment.createDate).toLocaleString([], {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
        <div className="content">{userComment.content}</div>
      </StyledRightSection>
    </StyledCommentContainer>
  );
};
