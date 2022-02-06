import styled from 'styled-components';

export const StyledDotsButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bbb;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  color: #bbb;
  transition: color 0.15s ease-out;

  &:hover {
    color: #6b6b6b;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 40px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 50px;
  }
`;
