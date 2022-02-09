import { useQuery } from 'react-query';
import { Container, Title, TitleMainColor } from 'components/PinnedBoards/PinnedBoards.styled';
import PinnedBoardEntry from 'components/PinnedBoardsEntry/PinnedBoardsEntry';
import StyledLink from 'components/StyledLink/StyledLink';

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
          <StyledLink to={`/board/${board.id}`}>
            <PinnedBoardEntry
              key={board.boardId}
              boardName={board.boardName}
              avatar={board.avatar}
            />
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default PinnedBoards;
