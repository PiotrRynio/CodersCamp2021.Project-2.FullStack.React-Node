import React from 'react';
import { Container } from './Subscribed.styled';
import { SubscribedBoardsList } from 'components/SubscribedBoardsList/SubscribedBoardsList';

const Subscribed = () => {
  return (
    <Container>
      <SubscribedBoardsList />
    </Container>
  );
};
export default Subscribed;
