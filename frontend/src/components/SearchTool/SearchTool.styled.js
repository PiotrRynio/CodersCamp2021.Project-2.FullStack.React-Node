import styled from 'styled-components';
export const StyledOptions = {
  option: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    background: 'none',
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    padding: 0,
    border: 'none',
    background: 'none',
    boxShadow: 'none',
    width: '100%',
  }),
  menuList: (provided) => ({
    padding: '0',
  }),

  control: (provided) => ({
    ...provided,
    height: '60px',
    width: '400px',
    marginTop: '5px',
    marginBottom: '5px',
    border: 'none',
    background: 'none',
    boxShadow: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '60px',
    borderRadius: '14px',
    marginRight: '5px',
    background: 'rgba(0, 0, 0, 0.33)',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '60px',
    width: '60px',
    borderRadius: '14px',
    background: 'white',
    border: 'none',
    padding: 0,
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '60px',
    width: '60px',
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

export const RowInOptions = styled.div`
  margin: 5px;
  height: 80px;
  width: 400px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  align-items: center;
  background: white;
`;

export const Title = styled.h3`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: start;
`;
