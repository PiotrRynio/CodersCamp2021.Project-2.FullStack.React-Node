import React from 'react';
import { Container } from './Home.styled';
import BoardPreviewList from 'components/BoardPreviewList/BoardPreviewList';
import BoardsList from 'components/BoardsList/BoardsList';

const Home = () => {
  return (
    <Container>
      <BoardsList />
    </Container>
  );
};

export default Home;
