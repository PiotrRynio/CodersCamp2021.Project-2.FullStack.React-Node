import React from 'react';
import { FaHome, FaBell, FaUserAlt, FaHeart, FaPlusSquare } from 'react-icons/fa';
import { Container, NavMenu, NavItem, NavLink, NavIcon, NavText } from './Navigation.styled';

const Navigation = () => {
  const navItems = [
    { path: '/', icon: <FaHome />, title: 'Home' },
    { path: 'subscribed', icon: <FaHeart />, title: 'Subscribed' },
    { path: 'add-post', icon: <FaPlusSquare />, title: 'Add post' },
    { path: 'notifications', icon: <FaBell />, title: 'Notifications' },
    { path: 'profile', icon: <FaUserAlt />, title: 'Profile' },
  ];

  return (
    <Container>
      <NavMenu>
        {navItems.map((navItem) => {
          return (
            <NavItem key={navItem.title}>
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
