import { Sidebar } from './RightSidebar.styled';
import PinnedBoards from 'components/PinnedBoards/PinnedBoards';

const RightSidebar = () => {
  return (
    <Sidebar>
      <PinnedBoards />
    </Sidebar>
  );
};
export default RightSidebar;
