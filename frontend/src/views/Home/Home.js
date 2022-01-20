import React from 'react';
import { Container } from './Home.styled';
import { CommentList } from '../../components/Comments/UserCommentList/CommentList';
import AnnouncementsList from '../../components/AnnouncementsList/AnnouncementsList';

const Home = () => {
  return (
    <Container>
      <CommentList />
      <AnnouncementsList boardsIds={[1, 2]} announcementsNumber={4} showBoardNames={true} />
    </Container>
  );
};

export default Home;
