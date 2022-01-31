import styled from 'styled-components';
export const StyledOptions = {
  option: (provided, state) => ({
    ...provided,
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
    border: 'none',
    background: 'none',
  }),
  control: (provided) => ({
    ...provided,
    height: '20px',
    width: '200px',
    marginTop: '10px',
    border: 'none',
    background: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '40px',
    borderRadius: '8px',
    marginRight: '5px',
    background: 'rgba(0, 0, 0, 0.33)',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '40px',
    borderRadius: '8px',
    background: 'white',
    border: 'none',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
