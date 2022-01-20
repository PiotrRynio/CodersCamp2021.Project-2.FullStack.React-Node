import React from 'react';
import { Container } from './Home.styled';
import { CommentsSection } from '../../components/Comments/CommentsSection/CommentsSection';

const Home = () => {
  return (
    <Container>
      <CommentsSection />
    </Container>
  );
};

export default Home;
