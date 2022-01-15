import { StyledCommentContainer } from './CommentContainer.styled';
import { StyledLeftSection } from './LeftSection.styled.js';
import { StyledRightSection } from './StyledRightSection';
import { useState } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

export const UserComment = ({ commentObject }) => {
  const [comment, setComment] = useState(commentObject);
  /*const [userImageUrl, setUserImageUrl] = useState('');
  const [authorID, setAuthorID] = useState('');*/

  return (
    <StyledCommentContainer>
      <StyledLeftSection>
        <UserAvatar userId={1} />
      </StyledLeftSection>
      <StyledRightSection>
        <div className="userName">
          {comment.author.firstName} {comment.author.lastName}
        </div>
        <div className="date">
          {new Date(commentObject.createDate).toLocaleString([], {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
        <div className="content">{comment.content}</div>
      </StyledRightSection>
    </StyledCommentContainer>
  );
};
