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
import Profile from '../Profile/Profile';
import LandingPage from '../LandingPage/LandingPage';
import Layout from '../Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="notifications" element={<Notifications />} />
              <Route path="subscribed" element={<Subscribed />} />
              <Route path="add-post" element={<AddPost />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Container>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
