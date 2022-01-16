import React from 'react';
import MainTemplate from '../viewTemplate/MainTemplate';
import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSide';
import TopBar from '../../components/Topbar/TopBar';
import Navigation from '../../components/Navigation/Navigation';
import { Container } from './App.styled';

function App() {
  return (
    <Container>
      <TopBar />
      <Navigation />
      <MainContent />
      <RightSide />
      {/*<MainTemplate>*/}
      {/*  <MainContent />*/}
      {/*  <RightSide />*/}
      {/*</MainTemplate>*/}
    </Container>
  );
}

export default App;
