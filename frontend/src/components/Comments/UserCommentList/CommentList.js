import { UserComment } from '../UserComment/UserComment';
import { useState } from 'react';
import { ListOfComments, Title } from './CommentList.styled';

export const CommentList = ({ comments }) => {
  const [commentsList, setCommentList] = useState(comments);

  return (
    <ListOfComments data-testid={'userCommentList'}>
      <Title>Comments</Title>
      <div>
        {commentsList.map((commentItem) => {
          return <UserComment key={commentItem.commentId} comment={commentItem} />;
        })}
      </div>
    </ListOfComments>
  );
};
