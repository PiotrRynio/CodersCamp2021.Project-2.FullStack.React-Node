import React from 'react';
import { Container } from './Subscribed.styled';
import { SubscribedBoardsList } from 'components/SubscribedBoardsList/SubscribedBoardsList';

const Subscribed = (userId) => {
  return (
    <Container>
      <SubscribedBoardsList userId={1} />
    </Container>
  );
};
export default Subscribed;
