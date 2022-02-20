import { useContext } from 'react';
import { LogoutButton } from './LogoutButton.styled';
import { UserContext } from '../../providers/AppProviders';

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <LogoutButton
      onClick={() => {
        if (!user.loggedIn) return;
        setUser({ userId: 0, loggedIn: false });
      }}
      type="button"
      value="text"
    >
      Wyloguj
    </LogoutButton>
  );
};

export default Logout;
