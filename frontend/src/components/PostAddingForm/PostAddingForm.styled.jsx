import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid #1a8cd8;
  border-radius: 2px;
  background-color: white;
  text-align: left;
`;
export const FormTitle = styled.h3`
  width: 230px;
  padding-bottom: 2px;
  padding-left: 5px;
  margin-bottom: 20px;
  border-bottom: 2px solid #1a8cd8;
  font-size: 20px;
`;

export const TitleInput = styled.input`
  height: 40px;
  padding: 5px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus {
    outline: 1px solid #1a8cd8;
  }
`;
export const ContentInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 5px;
  border-radius: 4px;
  text-align: left;
  border-color: hsl(0, 0%, 80%);
  resize: none;

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus {
    outline: 1px solid #1a8cd8;
  }
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  float: right;
  margin-top: 2px;
  border-color: #1a8cd8;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
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
export const StyledOptions = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted hsl(0, 0%, 80%)',
    background: state.isSelected ? '#1a8cd8' : 'white',
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
    border: '1px solid hsl(0, 0%, 80%)',
  }),
  control: (provided) => ({
    ...provided,
    height: '40px',
  }),
};
