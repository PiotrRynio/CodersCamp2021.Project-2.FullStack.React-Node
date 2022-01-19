import React from 'react';
import { Container } from './MainContent.styled';
import { CommentList } from '../../components/Comments/UserCommentList/CommentList';

const MainContent = () => {
  return (
    <Container>
      Main
      <CommentList />
    </Container>
  );
};

export default MainContent;
