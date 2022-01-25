import {useState} from 'react';
import {
  BoardInfoContainer,
  BoardInfo,
  BoardImage,
  BoardTitle,
  AuthorInfoContainer,
  AuthorName,
  AuthorAvatar
} from "./Board.styled";
import DotsButton from "../DotsButton/DotsButton";
import Dropdown from '../Dropdown/Dropdown';
import { FaUserCircle } from 'react-icons/fa';

const Board = () => {
  const [clickHandler, setClickHandler] = useState(false)

  return (
      <BoardInfoContainer>
        <BoardInfo>
          <BoardImage />
          <BoardTitle onClick={() => setClickHandler(!clickHandler)}>
            nazwa_tablicy
          </BoardTitle>
          <DotsButton>
            <Dropdown>
            </Dropdown>
          </DotsButton>
        </BoardInfo>
        <AuthorInfoContainer>
          <AuthorName>
            nazwa_uzytkownika
          </AuthorName>
          <AuthorAvatar>
            <FaUserCircle />
          </AuthorAvatar>
        </AuthorInfoContainer>
      </BoardInfoContainer>
  );
}

export default Board;