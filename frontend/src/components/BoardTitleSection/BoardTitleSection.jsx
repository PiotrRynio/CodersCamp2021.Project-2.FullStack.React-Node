import { FaUserCircle } from 'react-icons/fa';
import {
  BoardInfoContainer,
  BoardInfo,
  BoardImage,
  BoardTitle,
  AuthorInfoContainer,
  AuthorName,
  AuthorAvatar,
} from './BoardTitleSection.styled';
import DotsButton from 'components/DotsButton/DotsButton';
import Dropdown from 'components/Dropdown/Dropdown';

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
