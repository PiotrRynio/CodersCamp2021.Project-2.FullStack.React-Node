import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';
import BoardDescription from 'components/BoardDescription/BoardDescription';

const Board = ({ boardData, isOpen = false }) => {
  const { boardName, author, avatar, description, announcements, id } = boardData;

  return (
    <>
      <BoardTitleSection boardTitle={boardName} user={author} boardImg={avatar} boardId={id} />
      <BoardDescription
        descriptionText={description}
        postsNumber={announcements.length}
        lastPostDate={
          announcements.length > 0
            ? Date(announcements[announcements.length - 1].date).toDateString()
            : ''
        }
        distanceFromUser={1.2}
        boardId={id}
        isOpen={isOpen}
      />
    </>
  );
};

export default Board;
