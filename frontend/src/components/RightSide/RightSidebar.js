import { Sidebar } from './RightSidebar.styled';
import { SearchTool } from 'components/SearchTool/SearchTool';
import PinnedBoards from 'components/PinnedBoards/PinnedBoards';

const RightSidebar = () => {
  return (
    <Sidebar>
      <SearchTool userID={1} />
      <PinnedBoards />
    </Sidebar>
  );
};
export default RightSidebar;
