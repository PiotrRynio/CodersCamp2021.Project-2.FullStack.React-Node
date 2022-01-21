import styled from 'styled-components';
import {breakpoints} from "../../RWD/breakpoints";

export const StyledDotsButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bbb;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  color: #bbb;
  transition: color 0.15s ease-out;
  
    &:hover {
      color: #6b6b6b;
    }
  
    @media ${breakpoints.md} {
      font-size: 30px;
    }
  
    @media ${breakpoints.lg} {
      font-size: 40px;
    }
  
    @media ${breakpoints.xl} {
      font-size: 50px;
    }
`