import { Route } from 'react-router-dom';
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
import AppProviders from '../../providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <Route path="/log-in" element={<Login />} />
      <Route path="/sign-up" element={<SignIn />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="notifications" element={<Notifications />} />
          <Route path="subscribed" element={<Subscribed />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="profile" element={<Profile />} />
          <Route path="announcement/:id" element={<AnnouncementDetails />} />
        </Route>
      </Route>
    </AppProviders>
  );
}

export default App;
