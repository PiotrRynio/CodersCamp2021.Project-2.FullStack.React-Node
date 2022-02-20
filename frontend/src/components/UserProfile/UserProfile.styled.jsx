import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  height: 100%;
`;

export const UserBackground = styled.div`
  min-width: 100%;
  height: 150px;
  background: #bbb;

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 200px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    height: 300px;
  }
`;

export const UserAvatarContainer = styled.div`
  position: absolute;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 100px;
  margin-top: 100px;
  border-radius: 50%;
  border: 3px solid white;
  background: #bbb;

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 120px;
    min-width: 120px;
    margin-top: 140px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    min-height: 175px;
    min-width: 175px;
    margin-top: 212.5px;
  }
`;

export const UserAvatarEditButton = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background: #e1e1e1;
  color: #2c2c2c;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #696969;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    bottom: 6%;
    right: 6%;
    width: 20%;
    height: 20%;
    font-size: 20px;
  }
`;

export const UserName = styled.h2`
  display: flex;
  align-self: flex-end;
  padding: 10px 10px 0 0;
  font-weight: bold;
`;

export const UserBoardsAmount = styled.h4`
  display: flex;
  align-self: flex-end;
  padding: 5px 10px 0 0;
  margin: 0;
  font-weight: normal;
`;

export const TextBold = styled.span`
  font-weight: bold;
`;
