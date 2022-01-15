import { CommentContainer } from './CommentContainer.styled';
import { ImageContainer } from './ImageContainer.styled';
import { CommentContentContainer } from './CommentContentContainer.styled';
import { useState } from 'react';
import { RestoreMergeStatusError } from 'lint-staged/lib/symbols';

const UserComment = () => {
  const [comment, setComment] = useState('');
  const [userImageUrl, setUserImageUrl] = useState('');
  const [authorID, setAuthorID] = useState('');

  return (
    <CommentContainer>
      <ImageContainer>
        <img src={userImageUrl} alt="user " />
      </ImageContainer>
      <CommentContentContainer></CommentContentContainer>
    </CommentContainer>
  );
};
