import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import { CommentContainer, RightSection, UserName, Content, CreateDate } from './Comment.styled';

export const Comment = ({ comment }) => {
  const date = new Date(comment.date).toLocaleString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <CommentContainer data-testid="comment">
      <UserAvatar userAvatarImage={comment.author.avatarUrl} />
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
