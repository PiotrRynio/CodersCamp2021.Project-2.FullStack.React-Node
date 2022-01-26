import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;

  padding: 1em;
  background-color: white;
  border: 0.5px solid #68f;
  border-radius: 20px;

  * {
    margin: 3px 0px;
  }
`;

export const TitleInput = styled.input`
  width: 80%;
  height: 40px;
  float: left;
`;

export const Icon = styled.div`
  #TODO waiting for icon picker
  
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  border-color: rgba(0, 0, 0, 0.52);

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
export const Line = styled.hr`
  width: 250px;
  border-color: rgba(0, 0, 0, 0.52);
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Label = styled.label``;

export const FirstFormRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 30px;
=`;

export const IconOptions = {
  width: 30,

  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'blue' : 'black',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: '#9e9e9e',
    height: '40px',
    padding: 0,
    margin: 0,
    boxShadow: state.isFocused ? null : null,
  }),

  input: (provider, state) => ({
    ...provider,
    padding: 0,
    margin: 0,
  }),

  indicatorContainer: (provider, state) => ({
    ...provider,
    padding: 0,
    margin: 0,
  }),

  indicatorsContainer: (provider, state) => ({
    ...provider,
    padding: 0,
    margin: 0,
  }),
  valueContainer: (provider, state) => ({
    ...provider,
    padding: 0,
  }),
};
