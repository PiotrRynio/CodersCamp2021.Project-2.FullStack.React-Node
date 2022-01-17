import { useState } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import {
  CommentContainer,
  LeftSection,
  RightSection,
  UserName,
  Content,
  CreateDate,
} from './UserComment.styled';

export const UserComment = ({ comment }) => {
  const [userComment, setComment] = useState(comment);

  const date = new Date(userComment.createDate).toLocaleString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <CommentContainer data-testid="userComment">
      <LeftSection>
        <UserAvatar data-testid="userAvatar" userAvatarImage={userComment.author.avatarUrl} />
      </LeftSection>
      <RightSection>
        <UserName data-testid="userName">
          {userComment.author.firstName} {userComment.author.lastName}
        </UserName>
        <CreateDate data-testid="date">{date}</CreateDate>
        <Content data-testid="content">{userComment.content}</Content>
      </RightSection>
    </CommentContainer>
  );
};
