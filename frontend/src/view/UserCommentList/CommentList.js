import { UserComment } from '../UserComment/UserComment';
import { useState } from 'react';
import { StyledCommentListTitle, StyledCommentList } from './CommentSection.styled';

export const CommentList = ({ comments }) => {
  const [commentsList, setCommentList] = useState(comments);

  return (
    <StyledCommentList>
      <StyledCommentListTitle>Comments</StyledCommentListTitle>
      <div>
        {commentsList.map((commentItem) => {
          return <UserComment key={commentItem.commentId} comment={commentItem} />;
        })}
      </div>
    </StyledCommentList>
  );
};
