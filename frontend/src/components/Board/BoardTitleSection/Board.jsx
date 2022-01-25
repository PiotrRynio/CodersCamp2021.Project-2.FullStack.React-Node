import {
  BoardInfoContainer,
  BoardInfo,
  BoardImage,
  BoardTitle,
  AuthorInfoContainer,
  AuthorName,
  AuthorAvatar,
} from './Board.styled';
import DotsButton from '../../DotsButton/DotsButton';
import Dropdown from '../Dropdown/Dropdown';
import { FaUserCircle } from 'react-icons/fa';

const Board = ({ user, boardTitle }) => {
  return (
    <BoardInfoContainer>
      <BoardInfo>
        <BoardImage />
        {/* TODO: Dodać Link dookoła BoardTitle jak już będzie widok Board'a  */}
        <BoardTitle>{boardTitle}</BoardTitle>
        <DotsButton>
          <Dropdown></Dropdown>
        </DotsButton>
      </BoardInfo>
      <AuthorInfoContainer>
        <AuthorName>{user}</AuthorName>
        <AuthorAvatar>
          <FaUserCircle />
        </AuthorAvatar>
      </AuthorInfoContainer>
    </BoardInfoContainer>
  );
};

export default Board;
