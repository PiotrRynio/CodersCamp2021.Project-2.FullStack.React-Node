import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c2c2c;
`

export const StyledBoard = styled.div`
  width: 320px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e3e3e3;
  color: #2c2c2c;
`

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const HeaderFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow-wrap: break-word;
`

export const StyledImage = styled.div`
  min-height: 60px;
  min-width: 60px;
  margin-right: 5px;
  display: inline-block;
  background-color: #bbb;
  border-radius: 50%;
`

export const StyledUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #6b6b6b;
  overflow-wrap: break-word;
`

export const StyledName = styled.span`
  font-weight: lighter;
  text-align: right;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    cursor: pointer;
  }
`

export const StyledAvatar = styled.div`
  min-height: 25px;
  min-width: 25px;
  margin-left: 5px;
  display: inline-block;
  background-color: #bbb;
  border-radius: 50%;
`