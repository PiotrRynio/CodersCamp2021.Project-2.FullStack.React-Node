import React from 'react';
import { Container } from './Home.styled';
import { CommentsSection } from '../../components/CommentsSection/CommentsSection';
import AnnouncementsList from '../../components/AnnouncementsList/AnnouncementsList';

const Home = () => {
  return (
    <Container>
      <CommentsSection announcementId={1} />
      <AnnouncementsList boardsIds={[1, 2]} announcementsNumber={4} showBoardNames={true} />
    </Container>
  );
};

export default Home;
