import React from 'react';
import { FaHome, FaBell, FaUserAlt, FaHeart, FaPlusSquare } from 'react-icons/fa';

import {
  Container,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcon,
  NavButton,
  NavText,
} from './Navigation.styled';

const Navigation = () => {
  const navItems = [
    { path: '/', icon: <FaHome />, title: 'Home' },
    { path: 'subscribed', icon: <FaHeart />, title: 'Subscribed' },
    { path: 'addPost', icon: <FaPlusSquare />, title: 'Add post' },
    { path: 'notifications', icon: <FaBell />, title: 'Notifications' },
    { path: 'singUp', icon: <FaUserAlt />, title: 'Sing Up!' },
  ];
  return (
    <Container>
      <NavMenu>
        {navItems.map((navItem) => {
          return (
            <NavItem>
              <NavLinks to={navItem.path}>
                <NavIcon>{navItem.icon}</NavIcon>
                <NavText>{navItem.title}</NavText>
              </NavLinks>
            </NavItem>
          );
        })}
      </NavMenu>
    </Container>
  );
};

export default Navigation;
