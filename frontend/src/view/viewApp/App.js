import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSidebar';
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
      <MainContent />
      <RightSide />
    </Container>
  );
}

export default App;
