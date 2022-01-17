import React from 'react';
import {StyledDropdown, StyledDropdownItem, StyledImage} from "./Dropdown.styled";
import { FaBell, FaFlag, FaEyeSlash } from "react-icons/fa";

const Dropdown = () => {
  return (
    <StyledDropdown>
      <StyledDropdownItem>
        <StyledImage>
          <FaBell />
        </StyledImage>
        <span>Notify me</span>
      </StyledDropdownItem>
      <StyledDropdownItem>
        <StyledImage>
          <FaFlag />
        </StyledImage>
        <span>Report this post</span>
      </StyledDropdownItem>
      <StyledDropdownItem>
        <StyledImage>
          <FaEyeSlash />
        </StyledImage>
        <span>Don't show me this post</span>
      </StyledDropdownItem>
    </StyledDropdown>
    )
}

export default Dropdown;