import { useQuery } from 'react-query';
import { Container, Title, TitleMainColor } from './PinnedBoards.styled';
import BoardEntry from './BoardEntry';
import iconPicker from 'utils/iconPicker';

const PinnedBoards = () => {
  const {
    data: boardsData,
    isLoading,
    isError,
  } = useQuery('boards', async () => {
    return await fetch('/boards').then((response) => response.json());
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Title>
        Pinned<TitleMainColor>Boards</TitleMainColor>
      </Title>
      {boardsData.boards.map((board) => {
        return (
          <BoardEntry
            key={board.boardId}
            boardName={board.boardName}
            boardIcon={iconPicker(board.boardIcon)}
          />
        );
      })}
    </Container>
  );
};

export default PinnedBoards;
