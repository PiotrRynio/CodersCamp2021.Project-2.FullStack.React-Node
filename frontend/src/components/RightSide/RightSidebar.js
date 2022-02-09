import { Sidebar, Subscriptions } from './RightSidebar.styled';
import { SearchTool } from 'components/SearchTool/SearchTool';
import PinnedBoards from 'components/PinnedBoards/PinnedBoards';

const RightSidebar = () => {
  return (
    <Sidebar>
      <Subscriptions>Subscriptions</Subscriptions>
      <SearchTool userID={1} />
      <PinnedBoards />
    </Sidebar>
  );
};
export default RightSidebar;
