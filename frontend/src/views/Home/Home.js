import React from 'react';
import { Container } from './Home.styled';
import BoardPreviewList from '../../components/BoardPreviewList/BoardPreviewList';

const Home = () => {
  return (
    <Container>
      <BoardPreviewList boardsIds={[0, 1]} />
    </Container>
  );
};

export default Home;
