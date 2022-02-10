import { FaHome, FaBell, FaUserAlt, FaHeart, FaPlusSquare } from 'react-icons/fa';
import { Container, NavMenu, NavItem, NavLink, NavIcon, NavText } from './Navigation.styled';
import { useLocation } from 'react-router';

const Navigation = () => {
  const navItems = [
    { path: '/', icon: <FaHome />, title: 'Home', key: 'home' },
    { path: '/subscribed', icon: <FaHeart />, title: 'Subscribed', key: 'subscribed' },
    { path: '/add-post', icon: <FaPlusSquare />, title: 'Add post', key: 'add-post' },
    { path: '/notifications', icon: <FaBell />, title: 'Notifications', key: 'notifications' },
    { path: '/profile', icon: <FaUserAlt />, title: 'Profile', key: 'profile' },
  ];

  const { pathname } = useLocation();

  return (
    <Container>
      <NavMenu>
        {navItems.map((navItem) => {
          return (
            <NavItem isActive={pathname === navItem.path} key={navItem.title}>
              <NavLink to={navItem.path}>
                <NavIcon>{navItem.icon}</NavIcon>
                <NavText>{navItem.title}</NavText>
              </NavLink>
            </NavItem>
          );
        })}
      </NavMenu>
    </Container>
  );
};

export default Navigation;
