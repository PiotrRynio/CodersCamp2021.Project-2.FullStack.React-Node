import { useQuery } from 'react-query';
import Board from 'components/Board/Board';
import { BoardWrapper } from './BoardList.styled';

const BoardsList = () => {
  const {
    data: boardsData,
    isLoading,
    isError,
  } = useQuery('boards', async () => {
    return await fetch('/boards').then((response) => response.json());
  });

  if (isLoading || isError) {
    return <></>;
  }

  navigator.geolocation.getCurrentPosition((position) => console.log(position));

  return (
    <>
      {boardsData.boards.map((board) => (
        <BoardWrapper>
          <Board key={board.id} boardData={board} />
        </BoardWrapper>
      ))}
    </>
  );
};

export default BoardsList;
