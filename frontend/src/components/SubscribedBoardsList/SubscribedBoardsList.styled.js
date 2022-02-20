import styled from 'styled-components';

export const BoardWrapper = styled.div`
  width: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.colors.secondary};
  
  &:last-child {
    border: none;
  }
`;
