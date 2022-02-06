import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import AnnouncementsList from 'components/AnnouncementsList/AnnouncementsList';

const BoardDetails = () => {
  const { id } = useParams();

  const {
    data: boardData,
    isLoading,
    isError,
  } = useQuery('boardsList', async () => {
    return await fetch(`/boards/${id}`).then((response) => response.json());
  });

  if (isLoading || isError) {
    return <></>;
  }

  return (
    <>
      <AnnouncementsList
        boardsIds={[id]}
        announcementsNumber={boardData.announcements.length}
        showBoardNames={false}
      />
    </>
  );
};

export default BoardDetails;
