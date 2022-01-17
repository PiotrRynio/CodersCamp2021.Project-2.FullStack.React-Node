import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSidebar';
import TopBar from '../../components/Topbar/TopBar';
import Navigation from '../../components/Navigation/Navigation';
import { CommentList } from '../../components/Comments/UserCommentList/CommentList';
import { Container } from './App.styled';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';
import { sampleCommentList } from '../../mocks/UserCommentList';

function App() {
  return (
    <Container>
      <CommentList comments={sampleCommentList} />
    </Container>
  );
}

export default App;
