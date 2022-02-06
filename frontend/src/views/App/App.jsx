import { createContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Home from 'views/Home/Home';
import Notifications from 'views/Notifications/Notifications';
import Subscribed from 'views/Subscribed/Subscribed';
import AddPost from 'views/AddPost/AddPost';
import Profile from 'views/Profile/Profile';
import SignIn from 'views/SignIn/SignIn';
import Layout from 'views/Layout';
import Login from 'views/Login/Login';
import ProtectedRoute from 'views/ProtectedRoute';
import AnnouncementDetails from 'views/AnnouncementDetails/AnnouncementDetails';
import RecoverPassword from 'views/RecoverPassword/RecoverPassword';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { Container } from './App.styled';

const queryClient = new QueryClient();
export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState({ loggedIn: true });
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Container>
              <GlobalStyle />
              <Routes>
                <Route path="/log-in" element={<Login />} />
                <Route path="/sign-up" element={<SignIn />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="subscribed" element={<Subscribed />} />
                    <Route path="add-post" element={<AddPost />} />
                    <Route path="board/:id" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="announcement/:id" element={<AnnouncementDetails />} />
                  </Route>
                </Route>
              </Routes>
            </Container>
          </ThemeProvider>
        </QueryClientProvider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
