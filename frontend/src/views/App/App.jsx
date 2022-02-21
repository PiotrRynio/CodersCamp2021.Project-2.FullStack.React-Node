import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'views/Home/Home';
import Notifications from 'views/Notifications/Notifications';
import Subscribed from 'views/Subscribed/Subscribed';
import AddPost from 'views/AddPost/AddPost';
import Profile from 'views/Profile/Profile';
import SignUp from 'views/SignUp/SignUp';
import Layout from 'views/Layout';
import Login from 'views/Login/Login';
import ProtectedRoute from 'views/ProtectedRoute';
import BoardDetails from 'views/BoardDetails/BoardDetails';
import AnnouncementDetails from 'views/AnnouncementDetails/AnnouncementDetails';
import RecoverPassword from 'views/RecoverPassword/RecoverPassword';
import { AppProviders } from 'providers/AppProviders';
import { Container } from './App.styled';

function App() {
  return (
    <AppProviders>
      <Container>
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="notifications" element={<Notifications />} />
              <Route path="subscribed" element={<Subscribed />} />
              <Route path="add-post" element={<AddPost />} />
              <Route path="profile" element={<Profile />} />
              <Route path="announcement/:id" element={<AnnouncementDetails />} />
              <Route path="board/:id" element={<BoardDetails />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </AppProviders>
  );
}

export default App;
