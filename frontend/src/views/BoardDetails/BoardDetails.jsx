import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Board from 'components/Board/Board';
import AnnouncementsList from 'components/AnnouncementsList/AnnouncementsList';
import { REST_API_URL } from '../../constants/restApiPaths';

const BoardDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(`boardsid${id}`, async () => {
    return await fetch(`${REST_API_URL}/boards/${id}`)
      .then((response) => response.json())
      .then(({ board }) => {
        return board;
      });
  });

  if (isLoading || isError) {
    return <></>;
  }

  return (
    <>
      <Board boardData={data} isOpen={true} />
      <AnnouncementsList
        boardsIds={[id]}
        announcementsNumber={data.announcements.length}
        showBoardNames={false}
      />
    </>
  );
};

export default BoardDetails;
