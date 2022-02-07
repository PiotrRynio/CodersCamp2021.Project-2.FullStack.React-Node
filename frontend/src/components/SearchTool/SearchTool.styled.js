import styled from 'styled-components';
export const StyledOptions = {
  container: (provided) => ({
    ...provided,
    width: '100%',
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
    height: '60px',
    borderRadius: '14px',
    marginRight: '5px',
    background: 'rgba(0, 0, 0, 0.33)',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: 'flex',
    height: '60px',
    width: '20%',
    minWidth: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '14px',
    border: 'none',
    padding: 0,
    background: 'white',
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    display: 'flex',
    width: '60px',
    height: '60px',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '14px',
    background: 'white',
    border: 'none',
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
  font-size: 20px;
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

export const Title = styled.h3`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: 50px;
`;

export const CheckIcon = styled.span`
  color: #689f38;
`;

export const Container = styled.div`
  width: 100%;
`;
