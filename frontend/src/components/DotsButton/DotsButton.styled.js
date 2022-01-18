import styled from 'styled-components';
import {breakpoints} from "../../RWD/breakpoints";

export const StyledDotsButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
      font-size: 2rem;
    }
  
    @media ${breakpoints.lg} {
      font-size: 2.5rem;
    }
  
    @media ${breakpoints.xl} {
      font-size: 3.125rem;
    }
`