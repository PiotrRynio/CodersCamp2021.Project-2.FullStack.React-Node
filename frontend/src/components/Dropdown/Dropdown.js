import React from 'react';
import {StyledDropdown, DropdownItem, Image} from "./Dropdown.styled";
import { FaBell, FaFlag, FaEyeSlash } from "react-icons/fa";

const Dropdown = () => {
  return (
    <StyledDropdown>
      <DropdownItem>
        <Image>
          <FaBell />
        </Image>
        <span>Notify me</span>
      </DropdownItem>
      <DropdownItem>
        <Image>
          <FaFlag />
        </Image>
        <span>Report this post</span>
      </DropdownItem>
      <DropdownItem>
        <Image>
          <FaEyeSlash />
        </Image>
        <span>Don't show me this post</span>
      </DropdownItem>
    </StyledDropdown>
    )
}

export default Dropdown;