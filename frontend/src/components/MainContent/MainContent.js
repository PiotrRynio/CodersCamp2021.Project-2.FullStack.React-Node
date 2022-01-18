import React from 'react';
import { Container } from './MainContent.styled';
import { CommentList } from '../../components/Comments/UserCommentList/CommentList';
import { sampleCommentList } from '../../mocks/objects/UserCommentList';
const MainContent = () => {
  return (
    <Container>
      Main
      <CommentList comments={sampleCommentList} />
    </Container>
  );
};

export default MainContent;
