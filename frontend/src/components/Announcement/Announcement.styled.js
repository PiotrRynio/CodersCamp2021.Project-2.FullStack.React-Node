import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 10px;
  padding: 20px;
  background: white;
  border-radius: 10px;
`;

export const Board = styled.h2`
  font-weight: 300;
`;

export const Title = styled.h3`
  margin: 8px 0;
`;

export const Description = styled.p`
  text-align: justify;
  white-space: pre-wrap;
  margin-right: 20px;
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
  margin-top: 8px;
  color: #666;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: black;
  }
`;
