import React from 'react';
import { Sidebar, Subscriptions } from './RightSidebar.styled';
import { SearchTool } from 'components/SearchTool/SearchTool';

export const RightSidebar = () => {
  return (
    <Sidebar>
      <Subscriptions>Subscriptions</Subscriptions>
      <SearchTool />
    </Sidebar>
  );
};
