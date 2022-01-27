import {
  Container,
  Title,
  TitleMainColor,
  Icon,
  BoardsEntry,
  BoardName,
} from './PinnedBoards.styled';
import { HiClipboardList } from 'react-icons/hi';

const PinnedBoards = () => {
  return (
    <Container>
      <Icon>
        <HiClipboardList />
      </Icon>
      <Title>
        Pinned<TitleMainColor>Boards</TitleMainColor>
      </Title>
      <BoardsEntry>
        <HiClipboardList />
        <BoardName> Board 1 </BoardName>
      </BoardsEntry>
      <BoardsEntry>
        <HiClipboardList />
        <BoardName> Board 2 </BoardName>
      </BoardsEntry>
    </Container>
  );
};

export default PinnedBoards;
