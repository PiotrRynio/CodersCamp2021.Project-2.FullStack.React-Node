import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Board from 'components/Board/Board';
import AnnouncementsList from 'components/AnnouncementsList/AnnouncementsList';

const BoardDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(`boardsid${id}`, async () => {
    return await fetch(`/boards/${id}`).then((response) => response.json());
  });

  if (isLoading || isError) {
    return <></>;
  }

  return (
    <>
      <Board boardData={data} />
      <AnnouncementsList
        boardsIds={[+id]}
        announcementsNumber={data.announcements.length}
        showBoardNames={false}
      />
    </>
  );
};

export default BoardDetails;
