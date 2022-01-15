import React from 'react';
import TopBar from '../../components/Topbar/TopBar';
import { Wrapper, ContentWrapper } from './MainTemplate.styled';
import Navigation from '../../components/Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <TopBar />
      <ContentWrapper>
        <Navigation />
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
