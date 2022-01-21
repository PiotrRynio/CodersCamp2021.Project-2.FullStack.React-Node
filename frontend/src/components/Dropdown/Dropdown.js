import React from 'react';
import {StyledDropdown, DropdownItem, Image} from "./Dropdown.styled";
import { FaBell, FaFlag, FaEyeSlash } from "react-icons/fa";

const Dropdown = () => {
  const dropdownItems = [
    {
      icon: <FaBell />,
      text: 'Notify me'
    },
    {
      icon: <FaFlag />,
      text: 'Report this post'
    },
    {
      icon: <FaEyeSlash />,
      text: "Don't show me this post"
    }
  ]
  const displayDropdownItems = dropdownItems.map((dropdownItem, index) =>
    <DropdownItem key={index}>
      <Image>
        {dropdownItem.icon}
      </Image>
      <span>
        {dropdownItem.text}
      </span>
    </DropdownItem>
  )


  return (
    <StyledDropdown>
      {displayDropdownItems}
    </StyledDropdown>
    )
}

export default Dropdown;