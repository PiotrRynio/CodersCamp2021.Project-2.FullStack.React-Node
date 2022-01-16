import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 10px;
  padding: 15px;
  background: white;
  border-radius: 10px;

  h2 {
    font-weight: 300;
  }

  h3 {
    margin: 8px 0;
  }
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

export const Comments = styled.p`
  margin-top: 4px;
  color: #666;
`;
