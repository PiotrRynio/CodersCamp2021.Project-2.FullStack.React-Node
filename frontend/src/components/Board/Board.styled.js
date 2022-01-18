import styled from "styled-components";
import { breakpoints } from "../../RWD/breakpoints";

export const BoardContainer = styled.header`
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
  position: relative;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BoardInfo = styled.div`
  position: relative;
  min-width: 100%;
  display: flex;
  align-items: center;
  overflow-wrap: break-word;
`

export const BoardImage = styled.div`
  display: inline-block;
  min-height: 60px;
  min-width: 60px;
  margin-right: 10px;
  background-color: #bbb;
  border-radius: 50%;
  
    @media ${breakpoints.md} {
      min-height: 90px;
      min-width: 90px;
    }
  
    @media ${breakpoints.lg} {
      min-height: 120px;
      min-width: 120px;
    }
  
    @media ${breakpoints.xl} {
      min-height: 150px;
      min-width: 150px;    
    }
`

export const BoardTitle = styled.h2`
  @media ${breakpoints.md} {
    font-size: 2rem;
  }
  
  @media ${breakpoints.lg} {
    font-size: 2.5rem;
  }
  
  @media ${breakpoints.xl} {
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
  
    @media ${breakpoints.md} {
      font-size: 1.5rem;
    }
  
    @media ${breakpoints.lg} {
      font-size: 1.75rem;
    }
  
    @media ${breakpoints.xl} {
      font-size: 2rem;
    }
`

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
  
    @media ${breakpoints.md} {
      font-size: 2rem;
    }
  
    @media ${breakpoints.lg} {
      font-size: 2.5rem;
    }
  
    @media ${breakpoints.xl} {
      font-size: 3.125rem;
    }
`