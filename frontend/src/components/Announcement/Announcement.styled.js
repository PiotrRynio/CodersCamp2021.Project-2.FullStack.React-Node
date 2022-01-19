import styled from 'styled-components';
import { breakpoints } from '../../rwd/breakpoints';

export const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  align-content: center;
  background: white;
  border-radius: 10px;

  @media ${breakpoints.sm} {
    padding: 20px;
  }
`;

export const Board = styled.h2`
  font-weight: 300;
  font-size: 16px;

  @media ${breakpoints.sm} {
    font-size: 24px;
  }
`;

export const Title = styled.h3`
  margin: 4px 0;
  font-size: 14px;

  @media ${breakpoints.sm} {
    font-size: 19px;
  }
`;

export const Content = styled.p`
  margin-right: 5px;
  font-size: 14px;
  text-align: justify;
  white-space: pre-wrap;

  @media ${breakpoints.sm} {
    margin-right: 20px;
    font-size: 16px;
  }
`;

export const ReadMore = styled.span`
  font-weight: bold;
  color: #1a8cd8;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: white;
    background: #1a8cd8;
  }
`;

export const Comments = styled.p`
  margin-top: 4px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: black;
  }

  @media ${breakpoints.sm} {
    font-size: 16px;
  }
`;
