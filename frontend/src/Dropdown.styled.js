import styled from "styled-components";

export const StyledDropdown = styled.div`
  width: 160px;
  padding: 0.5rem;
  position: absolute;
  top: calc(0% + .3rem);
  right: 0;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  overflow: hidden;
`

export const StyledDropdownItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  font-weight: lighter;
  transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
    &:hover {
      background: #F8F8F8FF;
    }
`

export const StyledImage = styled.div`
  min-height: 40px;
  min-width: 40px;
  margin: 5px;
  display: inline-block;
  background-color: #e1e1e1;
  border-radius: 50%;
`