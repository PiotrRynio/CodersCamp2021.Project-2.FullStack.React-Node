import { createContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Notifications from '../Notifications/Notifications';
import Subscribed from '../Subscribed/Subscribed';
import AddPost from '../AddPost/AddPost';
import Profile from '../Profile/Profile';
import SignIn from '../SignIn/SignIn';
import Layout from '../Layout';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute';
import { Container } from './App.styled';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';

const queryClient = new QueryClient();
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: true });
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <QueryClientProvider client={queryClient}>
          <Container>
            <GlobalStyle />
            <Routes>
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<SignIn />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="subscribed" element={<Subscribed />} />
                  <Route path="add-post" element={<AddPost />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </Route>
            </Routes>
          </Container>
        </QueryClientProvider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
