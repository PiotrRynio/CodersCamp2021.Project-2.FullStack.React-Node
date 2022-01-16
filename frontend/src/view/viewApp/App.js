import React from 'react';
import MainTemplate from '../viewTemplate/MainTemplate';
import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSide';
import TopBar from '../../components/Topbar/TopBar';
import Navigation from '../../components/Navigation/Navigation';
import { Container } from './App.styled';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TopBar />
      <Navigation />
      {/*<MainContent />*/}
      <RightSide />
      {/*<MainTemplate>*/}
      {/*  <MainContent />*/}
      {/*  <RightSide />*/}
      {/*</MainTemplate>*/}
    </Container>
  );
}

export default App;
