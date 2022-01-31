import React from 'react';
import { Sidebar, Subscriptions } from './RightSidebar.styled';
import { SearchTool } from '../Search/Search';

const RightSidebar = () => {
  return (
    <Sidebar>
      <Subscriptions>Subscriptions</Subscriptions>
      <SearchTool />
    </Sidebar>
  );
};

export default RightSidebar;
