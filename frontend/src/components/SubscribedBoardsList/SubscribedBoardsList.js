import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';
import { useQuery } from 'react-query';

export const SubscribedBoardsList = () => {
  const { data, isLoading, isError } = useQuery('subscribedBoards', async () => {
    return await fetch(`/boards`)
      .then((response) => response.json())
      .then((data) => {
        return data.boards;
      });
  });
  if (isLoading) {
    return <>Loading..</>;
  }
  if (isError) {
    return <>Error</>;
  }

  return (
    <>
      {data.map((board) => (
        <BoardTitleSection
          key={board.boardsIds}
          boardTitle={board.boardName}
          user={board.author}
          boardImg={board.avatar}
          boardId={board.boardId}
        />
      ))}
    </>
  );
};
