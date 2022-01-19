import React from 'react';
import { Container } from './Home.styled';
import { CommentList } from '../../components/Comments/UserCommentList/CommentList';

const Home = () => {
  return (
    <Container>
      Main
      <CommentList />
    </Container>
  );
};

export default Home;
