import BoardPreview from '../BoardPreview/BoardPreview';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

const BoardPreviewList = ({ boardsIds }) => {
  const { data, isLoading, isError } = useQuery('board', async () => {
    return await fetch(`/boards`).then((response) => response.json());
  });

  const [boardsIdsToShow, setBoardsIdsToShow] = useState(() => []);

  useEffect(() => {
    if (!isLoading && !isError && !boardsIds) {
      const allBoardsIds = data.boards.map((board) => board.id);
      setBoardsIdsToShow(allBoardsIds);
    } else if (boardsIds) {
      setBoardsIdsToShow(boardsIds);
    }
  }, [data, boardsIds]);

  if (isLoading || isError) {
    return <></>;
  }

  return (
    <>
      {boardsIdsToShow.map((boardId) => (
        <BoardPreview key={boardId} boardId={boardId} />
      ))}
    </>
  );
};

export default BoardPreviewList;
