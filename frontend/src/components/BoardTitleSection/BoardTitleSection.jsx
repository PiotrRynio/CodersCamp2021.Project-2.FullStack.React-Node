import { FaUserCircle } from 'react-icons/fa';
import DotsButton from 'components/DotsButton/DotsButton';
import Dropdown from 'components/Dropdown/Dropdown';
import {
  BoardInfoContainer,
  BoardInfo,
  BoardImage,
  BoardTitle,
  AuthorInfoContainer,
  AuthorName,
  AuthorAvatar,
} from './BoardTitleSection.styled';
import StyledLink from 'components/StyledLink/StyledLink';

const BoardTitleSection = ({
  boardTitle = 'board_title',
  user = 'user_name',
  boardImg = '',
  boardId,
}) => {
  return (
    <BoardInfoContainer>
      <BoardInfo>
        <BoardImage src={boardImg} />
        <StyledLink to={`/board/${boardId}`}>
          <BoardTitle>{boardTitle}</BoardTitle>
        </StyledLink>
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
