import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';
import BoardDescription from 'components/BoardDescription/BoardDescription';

const Board = ({ boardData, distanceFromUser, isOpen = false }) => {
  const { boardName, author, avatar, description, announcements, id } = boardData;

  return (
    <>
      <BoardTitleSection boardTitle={boardName} user={author} boardImg={avatar} boardId={id} />
      <BoardDescription
        descriptionText={description}
        postsNumber={announcements.length}
        lastPostDate={
          announcements.length > 0
            ? new Date(announcements[announcements.length - 1].date).toDateString()
            : ''
        }
        distanceFromUser={distanceFromUser}
        boardId={id}
        isOpen={isOpen}
      />
    </>
  );
};

export default Board;
