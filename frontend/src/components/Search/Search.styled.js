import styled from 'styled-components';
export const StyledOptions = {
  option: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    background: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    padding: 0,
    marginTop: '10px',
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
    boxShadow: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '40px',
    borderRadius: '14px',
    marginRight: '5px',
    background: 'rgba(0, 0, 0, 0.33)',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    textAlign: 'center',
    height: '40px',
    width: '40px',
    borderRadius: '14px',
    background: 'white',
    border: 'none',
    padding: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
