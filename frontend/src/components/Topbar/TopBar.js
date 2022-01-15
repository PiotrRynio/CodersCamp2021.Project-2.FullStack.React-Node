import React from 'react';
import { TopBarContainer, TopBarLogo, TopBarLogoSpan, TopBarSearch } from './TopBar.styled.js';

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarLogo>
        Board<TopBarLogoSpan>MAP</TopBarLogoSpan>
      </TopBarLogo>
      <TopBarSearch />
    </TopBarContainer>
  );
};

export default TopBar;
