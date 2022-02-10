import { FaBell, FaFlag, FaEyeSlash } from 'react-icons/fa';
import { StyledDropdown, DropdownItem, Image } from './Dropdown.styled';
import useComponentVisible from './useComponentVisible';

const Dropdown = () => {
  const { ref, isComponentVisible } = useComponentVisible(true);
  const dropdownItems = [
    {
      icon: <FaBell />,
      text: 'Notify me',
    },
    {
      icon: <FaFlag />,
      text: 'Report this board',
    },
    {
      icon: <FaEyeSlash />,
      text: "Don't show me this board",
    },
  ];
  const displayDropdownItems = dropdownItems.map((dropdownItem) => (
    <DropdownItem key={dropdownItem.text}>
      <Image>{dropdownItem.icon}</Image>
      {dropdownItem.text}
    </DropdownItem>
  ));

  return <StyledDropdown ref={ref}>{isComponentVisible && displayDropdownItems}</StyledDropdown>;
};

export default Dropdown;
