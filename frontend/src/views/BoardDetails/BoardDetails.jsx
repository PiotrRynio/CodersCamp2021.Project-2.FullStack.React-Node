import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Board from 'components/Board/Board';
import AnnouncementsList from 'components/AnnouncementsList/AnnouncementsList';
import { REST_API_URL } from '../../constants/restApiPaths';
import { useContext } from 'react';
import { UserContext } from '../../providers/AppProviders';

const BoardDetails = () => {
  const { user, setUser } = useContext(UserContext);
  const id = user.id;
  const path = `${REST_API_URL}/boards/${id}`;
  const { data, isLoading, isError } = useQuery(path, async () => {
    return await fetch(path, { credentials: 'include' })
      .then((response) => response.json())
      .then(({ board }) => {
        console.log(board);
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
        boardsIds={[user.id]}
        announcementsNumber={data?.announcements?.length}
        showBoardNames={false}
      />
    </>
  );
};

export default BoardDetails;
