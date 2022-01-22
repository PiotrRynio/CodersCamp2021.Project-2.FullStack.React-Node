import { Comment } from 'components/Comments/SingleComment/Comment';
import { Title } from 'components/Comments/CommentList/CommentList.styled';

export const CommentList = ({ comments }) => {
  return (
    <>
      <Title>Comments</Title>
      <div>
        {comments.map((comment) => {
          return <Comment key={comment.commentId} comment={comment} />;
        })}
      </div>
    </>
  );
};
