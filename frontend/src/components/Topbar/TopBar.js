import React from 'react';
import { TopBarContainer, TopBarLogo, TopBarLogoMarked } from './TopBar.styled.js';

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarLogo to="/">
        Board<TopBarLogoMarked>MAP</TopBarLogoMarked>
      </TopBarLogo>
    </TopBarContainer>
  );
};

export default TopBar;
