import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: #2c2c2c;
  letter-spacing: 0.5px;
`;

export const DescriptionText = styled.div`
  overflow-wrap: break-word;
`;

export const BlueLink = styled.a`
  color: #1a8cd8;
`;

export const PostInfo = styled.div`
  font-size: 12px;
`;

export const BlueText = styled.span`
  color: #1a8cd8;
`;

export const Distance = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: #1a8cd8;
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
  color: ${(props) => (props.isActive === true ? '#1a8cd8' : '#bbb')};
  &:hover {
    color: #1a8cd8;
    cursor: pointer;
  }
`;
