import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';
import BoardDescription from 'components/BoardDescription/BoardDescription';

const Board = ({ boardData, distanceFromUser, isOpen = false }) => {
  console.log(boardData);
  const { boardName, authorLastName, avatarUrl, description, announcements, id } = boardData;
  const author = boardData.authorFirstName + ' ' + boardData.authorLastName;
  return (
    <>
      <BoardTitleSection boardTitle={boardName} user={author} boardImg={avatarUrl} boardId={id} />
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
