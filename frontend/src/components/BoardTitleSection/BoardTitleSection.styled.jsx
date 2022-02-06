import styled from 'styled-components';

export const BoardInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 15px 0 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #2c2c2c;
`;

export const BoardInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-wrap: break-word;
  min-width: 100%;
`;

export const BoardImage = styled.img`
  display: inline-block;
  height: 60px;
  width: 60px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #bbb;

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 80px;
    width: 80px;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    height: 100px;
    width: 100px;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    height: 110px;
    width: 110px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  color: #bbb;
  font-size: 25px;
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
