import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  padding: 15px;
  width: 100%;
  color: #2c2c2c;
  letter-spacing: 0.5px;
`;

export const DescriptionText = styled.div`
  overflow-wrap: break-word;
  font-size: 15px;
  font-weight: 300;
`;

export const BlueLink = styled.span`
  color: #1a8cd8;
`;

export const PostsInfo = styled.div`
  font-size: 12px;
  font-weight: 300;
`;

export const BlueText = styled.span`
  color: #1a8cd8;
`;

export const Distance = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  color: #1a8cd8;
`;

export const IconsContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  list-style-type: none;
`;

export const Icon = styled.li`
  margin-left: 10px;
  color: ${(props) => (props.isActive === true ? '#1a8cd8' : '#bbb')};
  font-size: 20px;
  transition: color 0.2s ease-out;
  &:hover {
    color: #1a8cd8;
    cursor: pointer;
  }
`;
