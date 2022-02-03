import React from 'react';
import { Container } from './Home.styled';
import BoardPreview from 'components/BoardPreview/BoardPreview';

const Home = () => {
  return (
    <Container>
      <BoardPreview id={0} />
    </Container>
  );
};

export default Home;
