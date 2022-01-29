import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1em;
  background-color: white;
  border: 1px solid #1a8cd8;
  border-radius: 2px;
`;

export const FormTitle = styled.h1`
  padding-left: 5px;
  width: 250px;
  font-size: 20px;
  border-bottom: 2px solid #1a8cd8;
`;

export const MarkedTitle = styled.span`
  color: #1a8cd8;
`;

export const BoardTitleInput = styled.input`
  padding: 5px;
  border: 2px solid #1a8cd8;
  border-radius: 5px;
  max-width: 600px;

  &:focus {
    outline: 1px solid #1a8cd8;
  }
`;

export const StyledLabel = styled.label`
  margin-top: 10px;
`;

export const StyledIconPickerLabel = styled.label`
  border: 2px solid #1a8cd8;
  border-radius: 5px;
`;

export const StyledIconPicker = styled.input`
  display: none;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 80px;
  text-align: left;
  padding: 5px;
  border-radius: 4px;
  border-color: hsl(0, 0%, 80%);
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus {
    outline: none !important;
    border: 2px solid #1a8cd8;
  }
`;
