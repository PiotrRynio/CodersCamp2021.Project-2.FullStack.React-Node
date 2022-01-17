import styled from "styled-components";
import {device} from "../../RWD/device";

export const StyledDropdown = styled.div`
  min-width: 160px;
  padding: 0.5rem;
  position: absolute;
  top: calc(0% + .7rem);
  right: 0;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  overflow: hidden;
    @media ${device.tablet} {
      min-width: 240px;
      top: calc(0% + 1.4rem);
    }
    @media ${device.laptop} {
      min-width: 300px;
      top: calc(0% + 1.75rem);
    }
    @media ${device.desktop} {
      min-width: 400px;
      top: calc(0% + 2.2rem);
    }
`

export const StyledDropdownItem = styled.div`
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
    @media ${device.tablet} {
      min-height: 67.5px;
      font-size: 1.5rem;
    }
    @media ${device.laptop} {
      min-height: 85px;
      font-size: 1.75rem;
    }
    @media ${device.desktop} {
      min-height: 102.5px;
      font-size: 1.9rem;
    }
`

export const StyledImage = styled.div`
  min-height: 40px;
  min-width: 40px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e1e1;
  color: #bbb;
  border-radius: 50%;
  transition: color 0.15s ease-in-out;
    @media ${device.tablet} {
      min-height: 53px;
      min-width: 53px;
    }
    @media ${device.laptop} {
      min-height: 66px;
      min-width: 66px;
    }
    @media ${device.desktop} {
      min-height: 80px;
      min-width: 80px;
    }
`