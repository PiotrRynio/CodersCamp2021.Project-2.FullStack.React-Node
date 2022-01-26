import { Title, TitleMainColor, Icon } from './PinnedBoards.styled';
import { HiClipboardList } from 'react-icons/hi';

const PinnedBoards = () => {
  return (
    <>
      <Icon>
        <HiClipboardList />
      </Icon>
      <Title>
        Pinned<TitleMainColor>Boards</TitleMainColor>
      </Title>
    </>
  );
};

export default PinnedBoards;
