import React from 'react';
import { Container } from './Home.styled';
import BoardsList from 'components/BoardsList/BoardsList';

const Home = () => {
  return (
    <Container>
      <BoardsList />
    </Container>
  );
};

export default Home;
