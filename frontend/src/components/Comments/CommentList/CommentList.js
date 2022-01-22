import { Comment } from 'components/Comments/SingleComment/Comment';
import { Title } from 'components/Comments/CommentList/CommentList.styled';

export const CommentList = ({ comments }) => {
  console.log('render commentList');
  return (
    <div data-testid={'commentList'}>
      <Title>Comments</Title>
      <div>
        {comments.map((commentItem) => {
          return <Comment key={commentItem.commentId} comment={commentItem} />;
        })}
      </div>
    </div>
  );
};
