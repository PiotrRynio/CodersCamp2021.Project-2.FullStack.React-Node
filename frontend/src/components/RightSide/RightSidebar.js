import { Sidebar, Subscriptions } from './RightSidebar.styled';
import { SearchTool } from 'components/SearchTool/SearchTool';

const RightSidebar = () => {
  return (
    <Sidebar>
      <Subscriptions>Subscriptions</Subscriptions>
      <SearchTool />
    </Sidebar>
  );
};
export default RightSidebar;
