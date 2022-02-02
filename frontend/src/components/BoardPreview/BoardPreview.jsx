import { useQuery } from 'react-query';
import Board from 'components/Board/Board';
import AnnouncementsList from '../AnnouncementsList/AnnouncementsList';

const BoardPreview = ({ id }) => {
  const { data, isLoading, isError } = useQuery('board', async () => {
    return await fetch(`/boards/${id}`).then((response) => response.json());
  });

  if (isLoading || isError) {
    return <>lol</>;
  }

  return (
    <>
      <Board boardTitle={data.boardName} user={data.user} />
      <AnnouncementsList boardsIds={[id]} announcementsNumber={2} showBoardNames={false} />
    </>
  );
};

export default BoardPreview;
