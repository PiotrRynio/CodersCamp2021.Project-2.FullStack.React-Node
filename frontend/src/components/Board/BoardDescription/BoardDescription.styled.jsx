import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: #2c2c2c;
  letter-spacing: 0.5px;
`;

export const DescriptionText = styled.div``;

export const PostInfo = styled.div`
  span {
    color: #1a8cd8;
  }
`;

export const Distance = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #1a8cd8;
  text-align: center;
`;

export const IconsContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
`;

export const Icon = styled.li`
  margin-left: 10px;
  font-size: 20px;
  transition: color 0.2s ease-out;

  &:hover {
    color: #1a8cd8;
    cursor: pointer;
  }
`;
