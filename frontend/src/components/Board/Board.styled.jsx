import styled from 'styled-components';

export const BoardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 100%;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e3e3e3;
  color: #2c2c2c;
`;

export const BoardInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 100%;
  overflow-wrap: break-word;
`;

export const BoardImage = styled.div`
  display: inline-block;
  min-height: 60px;
  min-width: 60px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #bbb;

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 80px;
    min-width: 80px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    min-height: 100px;
    min-width: 100px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    min-height: 110px;
    min-width: 110px;
  }
`;

export const BoardTitle = styled.h2`
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

export const AuthorInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 100%;
  color: #6b6b6b;
  overflow-wrap: break-word;
`;

export const AuthorName = styled.span`
  font-weight: lighter;
  text-align: right;
  vertical-align: center;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 25px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 30px;
  }
`;

export const AuthorAvatar = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #bbb;
  transition: color 0.15s ease-in-out;

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
