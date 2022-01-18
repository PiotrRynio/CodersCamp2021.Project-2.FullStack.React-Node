import styled from 'styled-components';
import { breakpoints } from '../../RWD/breakpoints';

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background: #1a8cd8;
  color: white;
  font-size: 18px;

  @media ${breakpoints.sm} {
    height: 70px;
    min-width: 70px;
    font-size: 30px;
  }
`;
