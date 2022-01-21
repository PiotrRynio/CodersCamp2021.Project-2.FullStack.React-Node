import { UserAvatar } from 'components/Comments/UserAvatar/UserAvatar';
import {
  CommentContainer,
  LeftSection,
  RightSection,
  UserName,
  Content,
  CreateDate,
} from './UserComment.styled';

export const UserComment = ({ comment }) => {
  const date = new Date(comment.createDate).toLocaleString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <CommentContainer data-testid="userComment">
      <LeftSection>
        <UserAvatar userAvatarImage={comment.author.avatarUrl} />
      </LeftSection>
      <RightSection>
        <UserName>
          {comment.author.firstName} {comment.author.lastName}
        </UserName>
        <CreateDate>{date}</CreateDate>
        <Content>{comment.content}</Content>
      </RightSection>
    </CommentContainer>
  );
};
