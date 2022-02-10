import React from 'react';
import { TopBarContainer, TopBarLogo, TopBarLogoMarked } from './TopBar.styled.js';
import { SearchTool } from 'components/SearchTool/SearchTool';

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarLogo to="/">
        Board<TopBarLogoMarked>MAP</TopBarLogoMarked>
      </TopBarLogo>
      <SearchTool userId={1} />
    </TopBarContainer>
  );
};

export default TopBar;
