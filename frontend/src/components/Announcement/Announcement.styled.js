import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 10px;
  padding: 15px;
  background: white;
  border-radius: 10px;
`;

export const Image = styled.img`
  height: 70px;
  border-radius: 50%;
  margin-right: 10px;
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
