import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;

  padding: 1em;
  background-color: white;
  border: 0.5px solid #1a8cd8;
  border-radius: 20px;

  * {
    margin: 3px 0px;
  }
`;

export const TitleInput = styled.input`
  width: 80%;
  height: 40px;
  padding: 5px;
  border-color: rgba(0, 0, 0, 0.52);
  font-weight: bold;

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const ContentInput = styled.input`
  width: 100%;
  height: 80px;
  padding: 5px;
  border-color: rgba(0, 0, 0, 0.52);

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const Button = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin-top: 2px;
  border-color: #1a8cd8;
`;

export const Line = styled.hr`
  width: 250px;
  border-color: rgba(0, 0, 0, 0.52);
`;

export const FormTitle = styled.h1`
  font-size: 20px;
`;

export const MarkedTitle = styled.span`
  color: #1a8cd8;
`;

export const SecondFormRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 30px;
=`;

export const IconOptions = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    background: state.isSelected ? '#1a8cd8' : 'white',
    margin: 0,
  }),

  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: '#9e9e9e',
    height: '40px',
    padding: 0,
    margin: 0,
  }),

  indicatorsContainer: (provider, state) => ({
    ...provider,
    margin: 0,
    padding: 0,
  }),

  indicatorSeparator: (provider) => ({
    ...provider,
    height: 25,
  }),
};

export const BoardOptions = {};
