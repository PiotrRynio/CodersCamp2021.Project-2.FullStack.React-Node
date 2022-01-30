import { BoardContainer } from './Board.styled';
import BoardTitleSection from './BoardTitleSection/BoardTitleSection';
import BoardDescription from './BoardDescription/BoardDescription';

const Board = () => {
  return (
    <BoardContainer>
      <BoardTitleSection />
      <BoardDescription
        descriptionText="Sed sed enim a turpis imperdiet bibendum. Sed dignissim lacus eget suscipit ultricies. Sed facilisis eget mauris eu laoreet. Aenean mattis viverra nisi, a sagittis arcu."
        postsNumber={8}
        lastPostDate="12.02.2020"
        distance={1.2}
      />
    </BoardContainer>
  );
};

export default Board;
