import React from 'react';
import { Container } from './MainContent.styled';
import { CommentList } from '../../components/Comments/UserCommentList/CommentList';
import Announcement from '../Announcement/Announcement';

const MainContent = () => {
  return (
    <Container>
      <CommentList />
    </Container>
  );
};

export default MainContent;
