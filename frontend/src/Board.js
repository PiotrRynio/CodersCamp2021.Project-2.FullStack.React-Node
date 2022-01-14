import React, {useEffect, useState} from 'react';
import { Wrapper, StyledBoard, StyledHeader, HeaderFlex, StyledImage, StyledUser, StyledName, StyledAvatar} from "./Board.styled";
import ButtonMenu from "./ButtonMenu";
import Dropdown from './Dropdown';

const Board = () => {
  const [clickHandler, setClickHandler] = useState(false)

  useEffect(() => {
    console.log('callback')
  }, [clickHandler])

  return (
    <Wrapper>
      <StyledBoard>
        <StyledHeader>
          <HeaderFlex>
            <StyledImage />
            <h2 onClick={() => setClickHandler(!clickHandler)}>
              nazwa_tablicy
            </h2>
            <ButtonMenu>
              <Dropdown>
              </Dropdown>
            </ButtonMenu>
          </HeaderFlex>
          <StyledUser>
            <StyledName>
              nazwa_uzytkownika
            </StyledName>
            <StyledAvatar>
            </StyledAvatar>
          </StyledUser>
        </StyledHeader>
      </StyledBoard>
    </Wrapper>
  );
}

export default Board;