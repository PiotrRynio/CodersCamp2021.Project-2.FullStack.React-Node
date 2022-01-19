import React from 'react';
import { FaHome, FaBell, FaUserAlt } from 'react-icons/fa';

import { Container, NavMenu, NavItem, NavLinks, NavIcon } from './Navigation.styled';
import Home from '../../views/Home/Home';
import Notifications from '../../views/Notifications/Notifications';

const Navigation = () => {
  return (
    <Container>
      <NavMenu>
        <NavItem>
          <NavLinks to="/" element={<Home />}>
            <NavIcon>
              <FaHome />
            </NavIcon>
            Home
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="Notifications" element={<Notifications />}>
            <NavIcon>
              <FaBell />
            </NavIcon>
            Notifications
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/singup">
            <NavIcon>
              <FaUserAlt />
            </NavIcon>
            Sing Up!
          </NavLinks>
        </NavItem>
      </NavMenu>
    </Container>
  );
};

export default Navigation;
