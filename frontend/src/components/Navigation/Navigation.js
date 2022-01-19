import React from 'react';
import { FaHome, FaBell, FaUserAlt, FaHeart } from 'react-icons/fa';

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
    { path: 'Notifications', icon: <FaBell />, title: 'Notifications' },
    { path: 'Subscribed', icon: <FaHeart />, title: 'Subscribed' },
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
