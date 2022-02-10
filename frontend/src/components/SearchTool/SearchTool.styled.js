import styled from 'styled-components';
export const StyledOptions = {
  container: (provided) => ({
    ...provided,
    borderRadius: '10px',
    width: '370px',
    transition: '0.2s ease-in-out',
  }),
  option: (provided) => ({
    ...provided,
    padding: 0,
    border: 'none',
    background: 'none',
    boxShadow: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    width: '100%',
    padding: 0,
    border: 'none',
    borderRadius: '14px',
    background: 'none',
    boxShadow: 'none',
  }),
  menuList: (provided) => ({
    padding: '0',
  }),

  control: (provided) => ({
    ...provided,
    height: '60px',
    width: '100%',
    margin: '5px 0px',
    border: 'none',
    background: 'none',
    boxShadow: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    width: '80%',
    height: '40px',
    borderRadius: '14px',
    background: 'rgba(0, 0, 0, 0.33)',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: 'none',
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

export const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-top: 5px;
  background: white;
  font-size: 18px;
`;

export const LeftSideOfOptionRow = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  word-break: break-all;
`;
export const RightSideOfOptionRow = styled.div`
  display: flex;
  padding: 10px;
`;
export const BoardName = styled.span`
  margin: 10px;
`;

export const CheckIcon = styled.span`
  color: #689f38;
`;
