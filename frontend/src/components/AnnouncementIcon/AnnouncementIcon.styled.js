import styled from 'styled-components';

export const IconContainer = styled.div`
  margin-right: 10px;
  height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 70px;
    min-width: 70px;
    font-size: 30px;
  }
`;
