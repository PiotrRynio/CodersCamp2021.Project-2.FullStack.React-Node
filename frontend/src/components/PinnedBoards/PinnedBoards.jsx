import { Container, Title, TitleMainColor, Icon, BoardName } from './PinnedBoards.styled';
import BoardEntry from './BoardEntry';
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
      <BoardEntry boardName="Board 11" boardIcon="todo" />
      <BoardEntry boardName="Board 22" boardIcon="todo" />
    </Container>
  );
};

export default PinnedBoards;
