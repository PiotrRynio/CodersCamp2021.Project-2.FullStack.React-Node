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

export const HiddenInput = styled.input`
  display: none;
`;

export const StyledIconPicker = styled.label`
  border: 2px solid #1a8cd8;
  border-radius: 5px;
  padding: 5px;
  font-size: 13px;
  color: #555;

  &:hover {
    background-color: #1a8cd8;
    color: white;
  }
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 80px;
  text-align: justify;
  padding: 5px;
  border: 2px solid #1a8cd8;
  border-radius: 4px;
  resize: none;

  &:focus {
    outline: 1px solid #1a8cd8;
  }
`;

export const StyledSelect = styled.select`
  padding: 5px;
  border: 2px solid #1a8cd8;
  border-radius: 4px;

  &:focus {
    outline: 1px solid #1a8cd8;
  }
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px;
  background-color: white;
  border: 2px solid #1a8cd8;
  border-radius: 4px;

  &:hover {
    background-color: #1a8cd8;
    color: white;
  }
`;
