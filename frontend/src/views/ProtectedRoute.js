import { useContext } from 'react';
import { useLocation } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from './App/App';

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/log-in" replace state={{ from: location }} />;
};

export default ProtectedRoute;
