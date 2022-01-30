import React from 'react';
import { Container } from './Home.styled';
import AnnouncementsList from 'components/AnnouncementsList/AnnouncementsList';
import BoardCreationForm from '../../components/BoardCreationForm/BoardCreationForm';

const Home = () => {
  return (
    <Container>
      <BoardCreationForm />
      <AnnouncementsList boardsIds={[0, 1]} announcementsNumber={5} showBoardNames={true} />
    </Container>
  );
};

export default Home;
