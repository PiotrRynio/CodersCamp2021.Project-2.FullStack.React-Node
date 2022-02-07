import PinnedBoards from 'components/PinnedBoards/PinnedBoards';
import { Sidebar } from './RightSidebar.styled';

const RightSidebar = () => {
  return (
    <Sidebar>
      <PinnedBoards />
    </Sidebar>
  );
};

export default RightSidebar;
