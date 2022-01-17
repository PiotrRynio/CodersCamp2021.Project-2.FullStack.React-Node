import styled from 'styled-components';
import {device} from "../../RWD/device";

export const StyledDotsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  color: #bbb;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  color: #bbb;
  transition: color 0.15s ease-out;
    &:hover {
      color: #6b6b6b;
    }
    @media ${device.tablet} {
      font-size: 2rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
    }
    @media ${device.desktop} {
      font-size: 3.125rem;
    }
`