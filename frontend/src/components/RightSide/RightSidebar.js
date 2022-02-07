import { Sidebar, Subscriptions } from './RightSidebar.styled';
import { SearchTool } from 'components/SearchTool/SearchTool';

const RightSidebar = () => {
  return (
    <Sidebar>
      <Subscriptions>Subscriptions</Subscriptions>
      <SearchTool userID={1} />
    </Sidebar>
  );
};
export default RightSidebar;
