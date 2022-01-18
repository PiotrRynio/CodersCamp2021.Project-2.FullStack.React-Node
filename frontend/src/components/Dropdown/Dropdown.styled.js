import styled from "styled-components";
import {breakpoints} from "../../RWD/breakpoints";

export const StyledDropdown = styled.div`
  position: absolute;
  top: calc(0% + 11px);
  right: 0;
  padding: 0.5rem;
  min-width: 160px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  overflow: hidden;
  
    @media ${breakpoints.md} {
      min-width: 240px;
      top: calc(0% + 22px);
    }
  
    @media ${breakpoints.lg} {
      min-width: 300px;
      top: calc(0% + 27px);
    }
  
    @media ${breakpoints.xl} {
      min-width: 400px;
      top: calc(0% + 35px);
    }
`

export const DropdownItem = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-weight: lighter;
  color: #2c2c2c;
  cursor: pointer;
  transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
  
    &:hover {
      background: #F8F8F8FF;
    }
  
    &:hover > :first-child {
      color: #2c2c2c;
    }
  
    @media ${breakpoints.md} {
      min-height: 67.5px;
      font-size: 1.2rem;
    }
  
    @media ${breakpoints.lg} {
      min-height: 85px;
      font-size: 1.4rem;
    }
  
    @media ${breakpoints.xl} {
      min-height: 102.5px;
      font-size: 1.7rem;
    }
`

export const Image = styled.div`
  min-height: 40px;
  min-width: 40px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e1e1;
  color: #bbb;
  border-radius: 50%;
  transition: color 0.15s ease-in-out;
  
    @media ${breakpoints.md} {
      min-height: 53px;
      min-width: 53px;
    }
  
    @media ${breakpoints.lg} {
      min-height: 66px;
      min-width: 66px;
    }
  
    @media ${breakpoints.xl} {
      min-height: 80px;
      min-width: 80px;
    }
`