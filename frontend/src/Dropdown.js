import React from 'react';
import {StyledDropdown, StyledDropdownItem, StyledImage} from "./Dropdown.styled";

const Dropdown = () => {
  return (
    <StyledDropdown>
      <StyledDropdownItem>
        <StyledImage/>
        <span>Notify me</span>
      </StyledDropdownItem>
      <StyledDropdownItem>
        <StyledImage/>
        <span>Report this post</span>
      </StyledDropdownItem>
      <StyledDropdownItem>
        <StyledImage/>
        <span>Don't show me this post</span>
      </StyledDropdownItem>
    </StyledDropdown>
    )
}

export default Dropdown;