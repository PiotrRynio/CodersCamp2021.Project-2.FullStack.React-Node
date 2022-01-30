import {
  BoardInfoContainer,
  BoardInfo,
  BoardImage,
  BoardTitle,
  AuthorInfoContainer,
  AuthorName,
  AuthorAvatar,
} from './BoardTitleSection.styled';
import DotsButton from './DotsButton/DotsButton';
import Dropdown from './Dropdown/Dropdown';
import { FaUserCircle } from 'react-icons/fa';

const BoardTitleSection = ({ boardTitle = 'board_title', user = 'user_name' }) => {
  return (
    <BoardInfoContainer>
      <BoardInfo>
        <BoardImage />
        {/* TODO: Dodać Link dookoła BoardTitle jak już będzie widok BoardTitleSection'a  */}
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

export default BoardTitleSection;
