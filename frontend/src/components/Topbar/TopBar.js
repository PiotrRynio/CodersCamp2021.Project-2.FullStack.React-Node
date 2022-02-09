import React from 'react';
import { TopBarContainer, TopBarLogo, TopBarLogoMarked, TopBarSearch } from './TopBar.styled.js';

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarLogo to="/">
        Board<TopBarLogoMarked>MAP</TopBarLogoMarked>
      </TopBarLogo>
      <TopBarSearch />
    </TopBarContainer>
  );
};

export default TopBar;
