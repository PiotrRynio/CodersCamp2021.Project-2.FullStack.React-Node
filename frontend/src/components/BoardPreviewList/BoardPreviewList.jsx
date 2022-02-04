import BoardPreview from '../BoardPreview/BoardPreview';

const BoardPreviewList = ({ boardsIds }) => {
  return (
    <>
      {boardsIds.map((boardId) => (
        <BoardPreview key={boardId} boardId={boardId} />
      ))}
    </>
  );
};

export default BoardPreviewList;
