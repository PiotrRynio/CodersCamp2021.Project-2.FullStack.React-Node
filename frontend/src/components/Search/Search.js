import Select, { components } from 'react-select';
import { StyledOptions } from './Search.styled';
import { FaSearch } from 'react-icons/fa';

export const SearchTool = (callback) => {
  //TODO pobrac dostepne tablice
  //TODO pobrac tablice uzytkownika

  const options = [
    { value: '1', label: 'temp1' },
    { value: '2', label: 'temp2' },
    { value: '3', label: 'temp3' },
  ];
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FaSearch />
      </components.DropdownIndicator>
    );
  };

  return (
    <>
      <Select
        styles={StyledOptions}
        components={{ DropdownIndicator }}
        options={options}
        placeholder={''}
      />
    </>
  );
};
