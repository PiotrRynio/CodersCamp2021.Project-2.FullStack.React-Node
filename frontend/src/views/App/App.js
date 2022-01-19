import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSidebar';
import TopBar from '../../components/Topbar/TopBar';
import Navigation from '../../components/Navigation/Navigation';
import { Container } from './App.styled';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <GlobalStyle />
        <TopBar />
        <Navigation />
        <MainContent />
        <RightSide />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
