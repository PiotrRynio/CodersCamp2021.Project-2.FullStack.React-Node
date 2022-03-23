import { useQuery } from 'react-query';
import { useContext } from 'react';
import { UserContext } from 'providers/AppProviders';
import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';
import { BoardWrapper } from './SubscribedBoardsList.styled';

export const SubscribedBoardsList = () => {
  const { user } = useContext(UserContext);

  const { data, isLoading, isError } = useQuery('subscribedBoards', async () => {
    return await fetch(`user/${user.id}/boards`)
      .then((response) => response.json())
      .then((data) => {
        return data.boards;
      });
  });
  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error</>;
  }

  return (
    <>
      {data.map((board) => (
        <BoardWrapper key={board.boardsIds}>
          <BoardTitleSection
            boardTitle={board.boardName}
            user={board.author}
            boardImg={board.avatar}
            boardId={board.id}
          />
        </BoardWrapper>
      ))}
    </>
  );
};
