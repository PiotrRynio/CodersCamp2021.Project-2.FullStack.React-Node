import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';
import { useQuery } from 'react-query';
import { BoardWrapper } from './SubscribedBoardsList.styled';
import { UserContext } from 'providers/AppProviders';
import { useContext } from 'react';

export const SubscribedBoardsList = () => {
  const { user } = useContext(UserContext);

  console.log(user);
  const { data, isLoading, isError } = useQuery('subscribedBoards', async () => {
    return await fetch(`user/${user.userId}/boards`)
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
        <BoardWrapper>
          <BoardTitleSection
            key={board.boardsIds}
            boardTitle={board.boardName}
            user={board.author}
            boardImg={board.avatar}
            boardId={board.boardId}
          />
        </BoardWrapper>
      ))}
      ;
    </>
  );
};
