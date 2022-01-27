import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;

  padding: 1em;
  background-color: white;
  border: 1px solid #1a8cd8;
  border-radius: 2px;
`;

export const TitleInput = styled.input`
  height: 40px;
  padding: 5px;
  border: 1px solid hsl(0, 0%, 80%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  :focus {
    outline: none !important;
    border: 2px solid #1a8cd8;
  }
`;
export const ContentInput = styled.textarea`
  width: 100%;
  height: 80px;
  text-align: left;
  padding: 5px;
  border-radius: 4px;

  border-color: hsl(0, 0%, 80%);
  c :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus {
    outline: none !important;
    border: 2px solid #1a8cd8;
  }
`;
export const Button = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin-top: 2px;
  border-color: #1a8cd8;
  float: right;
`;

export const Line = styled.hr`
  width: 250px;
  border-color: rgba(0, 0, 0, 0.52);
  margin-bottom: 20px;
  margin-top: 0px;
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
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomFormSection = styled.div``;
export const StyledOptions = {
  option: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    borderBottom: '1px dotted hsl(0, 0%, 80%)',
    background: state.isSelected ? '#1a8cd8' : 'white',
    margin: 0,
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
    border: '1px solid hsl(0, 0%, 80%)',
  }),
  control: (provided) => ({
    ...provided,
    background: '#fff',
    height: '40px',
  }),
};
