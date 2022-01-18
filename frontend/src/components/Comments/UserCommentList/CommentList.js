import { UserComment } from 'components/Comments/UserComment/UserComment';
import { Title } from 'components/Comments/UserCommentList/CommentList.styled';

export const CommentList = ({ comments }) => {
  return (
    <div data-testid={'userCommentList'}>
      <Title>Comments</Title>
      <div>
        {comments.map((commentItem) => {
          return <UserComment key={commentItem.commentId} comment={commentItem} />;
        })}
      </div>
    </div>
  );
};
