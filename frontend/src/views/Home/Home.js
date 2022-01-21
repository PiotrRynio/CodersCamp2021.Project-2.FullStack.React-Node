import React from 'react';
import { Container } from './Home.styled';
import AnnouncementsList from '../../components/AnnouncementsList/AnnouncementsList';

const Home = () => {
  return (
    <Container>
      <AnnouncementsList boardsIds={[0, 1]} announcementsNumber={5} showBoardNames={true} />
    </Container>
  );
};

export default Home;
