import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  align-content: center;
  background: white;
  border-radius: 10px;
  max-width: 100%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const TextWrapper = styled.div`
  max-width: calc(100% - 55px);

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: calc(100% - 80px);
  }
`;

export const Board = styled.h2`
  font-weight: 300;
  font-size: 16px;
`;

export const Title = styled.h3`
  margin: 4px 0;
  font-size: 14px;
`;

export const Content = styled.p`
  margin-right: 5px;
  font-size: 14px;
  text-align: justify;
  white-space: pre-wrap;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-right: 20px;
  }
`;

export const ShortContent = styled.p`
  margin-right: 5px;
  font-size: 14px;
  white-space: nowrap;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-right: 20px;
  }
`;

export const ReadMore = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.primary};
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
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
