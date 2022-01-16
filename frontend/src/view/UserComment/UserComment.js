import {
  StyledCommentContainer,
  StyledLeftSection,
  StyledRightSection,
  StyledUserName,
  StyledContent,
  StyledDate,
} from './UserComment.styled';
import { useState } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

export const UserComment = ({ comment }) => {
  const [userComment, setComment] = useState(comment);

  return (
    <StyledCommentContainer>
      <StyledLeftSection>
        <UserAvatar userAvatarImage={userComment.author.avatarUrl} />
      </StyledLeftSection>
      <StyledRightSection>
        <StyledUserName>
          {userComment.author.firstName} {userComment.author.lastName}
        </StyledUserName>
        <StyledDate>
          {new Date(userComment.createDate).toLocaleString([], {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </StyledDate>
        <StyledContent>{userComment.content}</StyledContent>
      </StyledRightSection>
    </StyledCommentContainer>
  );
};
