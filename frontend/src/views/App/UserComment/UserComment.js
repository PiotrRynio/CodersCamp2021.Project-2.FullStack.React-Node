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
    <StyledCommentContainer data-testid="userComment">
      <StyledLeftSection>
        <UserAvatar data-testid="userAvatar" userAvatarImage={userComment.author.avatarUrl} />
      </StyledLeftSection>
      <StyledRightSection>
        <StyledUserName data-testid="userName">
          {userComment.author.firstName} {userComment.author.lastName}
        </StyledUserName>
        <StyledDate data-testid="date">
          {new Date(userComment.createDate).toLocaleString([], {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </StyledDate>
        <StyledContent data-testid="content">{userComment.content}</StyledContent>
      </StyledRightSection>
    </StyledCommentContainer>
  );
};
