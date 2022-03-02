import { useContext } from 'react';
import { Button } from './LogoutButton.styled';
import { UserContext } from '../../providers/AppProviders';

const LogoutButton = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Button
      onClick={() => {
        if (!user.loggedIn) return;
        setUser({ userId: 0, loggedIn: false });
      }}
      type="button"
      value="text"
    >
      Wyloguj
    </Button>
  );
};

export default LogoutButton;
