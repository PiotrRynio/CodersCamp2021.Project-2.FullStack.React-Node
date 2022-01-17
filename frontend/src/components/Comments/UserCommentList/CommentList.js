import { UserComment } from '../UserComment/UserComment';
import { ListOfComments, Title } from './CommentList.styled';

export const CommentList = ({ comments }) => {
  return (
    <ListOfComments data-testid={'userCommentList'}>
      <Title>Comments</Title>
      <div>
        {comments.map((commentItem) => {
          return <UserComment key={commentItem.commentId} comment={commentItem} />;
        })}
      </div>
    </ListOfComments>
  );
};
