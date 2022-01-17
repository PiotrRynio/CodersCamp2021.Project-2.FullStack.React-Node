import styled from "styled-components";
import { device } from "../../RWD/device";

export const BoardContainer = styled.div`
  box-sizing: border-box;
  min-width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e3e3e3;
  color: #2c2c2c;
`

export const BoardInfoContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const BoardInfo = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow-wrap: break-word;
`

export const BoardImage = styled.div`
  min-height: 60px;
  min-width: 60px;
  margin-right: 5px;
  display: inline-block;
  background-color: #bbb;
  border-radius: 50%;
    @media ${device.tablet} {
      min-height: 90px;
      min-width: 90px;
    }
    @media ${device.laptop} {
      min-height: 120px;
      min-width: 120px;
    }
    @media ${device.desktop} {
      min-height: 150px;
      min-width: 150px;    
    }
`

export const BoardTitle = styled.h2`
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
  @media ${device.desktop} {
    font-size: 3.125rem;
  }
`

export const AuthorInfoContainer = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #6b6b6b;
  overflow-wrap: break-word;
`

export const AuthorName = styled.span`
  font-weight: lighter;
  text-align: right;
  vertical-align: center;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.5px;
    }
    @media ${device.tablet} {
      font-size: 1.5rem;
    }
    @media ${device.laptop} {
      font-size: 1.75rem;
    }
    @media ${device.desktop} {
      font-size: 2rem;
    }
`

export const AuthorAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 25px;
  color: #bbb;
  transition: color 0.15s ease-in-out;
    &:hover {
      color: #6b6b6b;
    }
    @media ${device.tablet} {
      font-size: 2rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
    }
    @media ${device.desktop} {
      font-size: 3.125rem;
    }
`