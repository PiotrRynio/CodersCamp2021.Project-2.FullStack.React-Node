import { Comment } from 'components/Comment/Comment';
import { Title } from 'components/CommentList/CommentList.styled';

export const CommentList = ({ comments }) => {
  return (
    <>
      <Title>Comments</Title>
      <div>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </>
  );
};
