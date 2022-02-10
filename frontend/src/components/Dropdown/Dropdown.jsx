import { FaBell, FaFlag, FaEyeSlash } from 'react-icons/fa';
import { StyledDropdown, DropdownItem, Image, Overlay } from './Dropdown.styled';

const Dropdown = ({ onClose }) => {
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

  return (
    <>
      <Overlay onClick={onClose} />
      <StyledDropdown>{displayDropdownItems}</StyledDropdown>
    </>
  );
};

export default Dropdown;
