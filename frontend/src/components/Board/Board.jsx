import { BoardContainer } from './Board.styled';
import BoardTitleSection from './BoardTitleSection/BoardTitleSection';
import BoardDescription from './BoardDescription/BoardDescription';

const Board = () => {
  return (
    <BoardContainer>
      <BoardTitleSection />
      <BoardDescription />
    </BoardContainer>
  );
};

export default Board;
