import React from 'react';
import { Container } from './Home.styled';
import { CommentList } from '../../components/Comments/UserCommentList/CommentList';
import Announcement from '../Announcement/Announcement';

const Home = () => {
  return (
    <Container>
      <CommentList />
    </Container>
  );
};

export default Home;
