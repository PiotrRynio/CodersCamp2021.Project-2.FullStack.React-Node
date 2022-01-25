import styled from "styled-components";
import {breakpoints} from "components/../rwd/breakpoints";

export const StyledDropdown = styled.div`
  position: absolute;
  top: calc(0% + 15px);
  right: 0;
  padding: 0.5rem;
  min-width: 160px; 
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  overflow: hidden;
  
    @media ${breakpoints.md} {
      min-width: 240px;
      top: calc(0% + 21px);
    }
  
    @media ${breakpoints.lg} {
      min-width: 300px;
      top: calc(0% + 28px);
    }
  
    @media ${breakpoints.xl} {
      min-width: 400px;
      top: calc(0% + 35px);
    }
`

export const DropdownItem = styled.div`
  padding: 0px 6px;
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
      font-size: 20px;
    }
  
    @media ${breakpoints.lg} {
      padding: 0 10px;
      min-height: 85px;
      font-size: 25px;
    }
  
    @media ${breakpoints.xl} {
      min-height: 102.5px;
      font-size: 30px;
    }
`

export const Image = styled.div`
  margin-right: 10px;
  min-height: 40px;
  min-width: 40px;
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