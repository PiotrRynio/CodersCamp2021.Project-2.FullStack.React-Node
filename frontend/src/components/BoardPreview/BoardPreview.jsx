import { useQuery } from 'react-query';
import AnnouncementsList from 'components/AnnouncementsList/AnnouncementsList';
import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';

const BoardPreview = ({ boardId }) => {
  const {
    data: boardsData,
    isLoading,
    isError,
  } = useQuery('boards', async () => {
    return await fetch(`/boards`).then((response) => response.json());
  });

  if (isLoading || isError) {
    return <>Error</>;
  }

  const { boardName, author, avatar } = boardsData.boards[boardId];

  return (
    <>
      <BoardTitleSection boardTitle={boardName} user={author} boardImg={avatar} boardId={boardId} />
      <AnnouncementsList boardsIds={[boardId]} announcementsNumber={2} showBoardNames={false} />
    </>
  );
};

export default BoardPreview;
