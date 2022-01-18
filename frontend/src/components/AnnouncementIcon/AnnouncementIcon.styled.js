import styled from 'styled-components';
import { breakpoints } from '../../RWD/breakpoints';

export const IconContainer = styled.div`
  margin-right: 10px;
  height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #1a8cd8;
  color: white;
  font-size: 18px;

  @media ${breakpoints.sm} {
    height: 70px;
    min-width: 70px;
    font-size: 30px;
  }
`;
