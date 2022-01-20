import React from 'react';
import { Container } from './Home.styled';
import { CommentList } from '../../components/Comments/CommentList/CommentList';
import { CommentForm } from '../../components/Comments/CommentInputForm/CommentForm';

const Home = () => {
  return (
    <Container>
      <CommentForm />
      <CommentList />
    </Container>
  );
};

export default Home;
