import { useQuery } from 'react-query';
import Board from 'components/Board/Board';
import AnnouncementsList from 'components/AnnouncementsList/AnnouncementsList';

const BoardPreview = ({ boardId }) => {
  const { data, isLoading, isError } = useQuery('board', async () => {
    return await fetch(`/boards`).then((response) => response.json());
  });

  if (isLoading || isError) {
    return <>Error</>;
  }

  return (
    <>
      <Board boardTitle={data.boards[boardId].boardName} user={data.boards[boardId].author} />
      <AnnouncementsList boardsIds={[boardId]} announcementsNumber={5} showBoardNames={false} />
    </>
  );
};

export default BoardPreview;
