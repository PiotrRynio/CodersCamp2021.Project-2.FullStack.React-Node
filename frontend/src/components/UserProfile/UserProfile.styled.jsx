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
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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

export const EditBackgroundButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  border: 0.5px solid #1c1c1c;
  border-radius: 20px;
  background: transparent;
  color: #1c1c1c;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
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
`;

export const UserBoardsAmount = styled.h4`
  display: flex;
  align-self: flex-end;
  padding: 5px 10px 40px 0;
  margin: 0;
  opacity: 0.5;
  font-weight: normal;
`;

export const TextBold = styled.span`
  font-weight: bold;
`;

export const BoardListHeader = styled.h1`
  display: flex;
  align-self: flex-start;
  padding: 10px 80px 10px 80px;
  margin: 40px 15px 10px 0px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: normal;
`;
