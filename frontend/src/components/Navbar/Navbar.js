import React from 'react';
import { Nav, NavContainer, NavLogo, NavLogoSpan, NavIcon } from './Navbar.styled.js';
import { AiFillBell } from 'react-icons/ai';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          Board<NavLogoSpan>MAP</NavLogoSpan>
        </NavLogo>
        <NavIcon>
          <AiFillBell />
        </NavIcon>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
