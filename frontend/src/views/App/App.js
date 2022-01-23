import React from 'react';
import Home from '../Home/Home';
import { Container } from './App.styled';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notifications from '../Notifications/Notifications';
import Subscribed from '../Subscribed/Subscribed';
import AddPost from '../AddPost/AddPost';
import Profile from '../Profile/Profile';
import SignIn from '../SignIn/SignIn';
import Layout from '../Layout';
import Login from '../Login/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container>
          <GlobalStyle />
          <Routes>
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<SignIn />} />
            <Route path="/" element={<Layout />}>
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
