import { useQuery } from 'react-query';
import { Container, Title, TitleMainColor } from 'components/PinnedBoards/PinnedBoards.styled';
import PinnedBoardEntry from 'components/PinnedBoardsEntry/PinnedBoardsEntry';
import StyledLink from 'components/StyledLink/StyledLink';
import { REST_API_URL } from '../../constants/restApiPaths';

const PinnedBoards = () => {
  const url = `${REST_API_URL}/boards`;
  const {
    data: boardsData,
    isLoading,
    isError,
  } = useQuery('boards', async () => {
    return await fetch(url, { credentials: 'include' }).then((response) => response.json());
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
          <StyledLink key={board.boardName} to={`/board/${board.id}`}>
            <PinnedBoardEntry boardName={board.boardName} avatar={board.avatarUrl} />
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default PinnedBoards;
