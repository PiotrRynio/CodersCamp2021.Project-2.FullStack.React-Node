import React from 'react';
import Home from '../Home/Home';
import RightSide from '../../components/RightSide/RightSidebar';
import TopBar from '../../components/Topbar/TopBar';
import Navigation from '../../components/Navigation/Navigation';
import { Container, MainSection } from './App.styled';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notifications from '../Notifications/Notifications';
import Subscribed from '../Subscribed/Subscribed';
import AddPost from '../AddPost/AddPost';
import SignIn from '../SignIn/SignIn';
import AnnouncementsDetails from '../AnnouncementDetails/AnnouncementDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container>
          <GlobalStyle />
          <TopBar />
          <Navigation />
          <RightSide />
          <MainSection>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/announcements/:id" element={<AnnouncementsDetails />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/subscribed" element={<Subscribed />} />
              <Route path="/addPost" element={<AddPost />} />
              <Route path="/signIn" element={<SignIn />} />
            </Routes>
          </MainSection>
        </Container>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
