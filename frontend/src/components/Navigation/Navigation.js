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
  const navItems = [{ path: '/' }];
  return (
    <Container>
      <NavMenu>
        <NavItem>
          <NavLinks to={navItems}>
            <NavIcon>
              <FaHome />
            </NavIcon>
            Home
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="Notifications">
            <NavIcon>
              <FaBell />
            </NavIcon>
            <NavText>Notifications</NavText>
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="Subscribed">
            <NavIcon>
              <FaHeart />
            </NavIcon>
            Subscribed
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavButton>Sing Up</NavButton>
        </NavItem>
      </NavMenu>
    </Container>
  );
};

export default Navigation;
