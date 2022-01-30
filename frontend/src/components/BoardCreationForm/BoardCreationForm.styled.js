import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 1px solid #1a8cd8;
  border-radius: 2px;
  background-color: white;
  text-align: left;
`;

export const FormTitle = styled.h1`
  width: 250px;
  padding-left: 5px;
  border-bottom: 2px solid #1a8cd8;
  font-size: 20px;
`;

export const MarkedTitle = styled.span`
  color: #1a8cd8;
`;

export const BoardTitleInput = styled.input`
  padding: 5px;
  border: 2px solid #1a8cd8;
  border-radius: 5px;

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

export const StyledIconPicker = styled.div`
  padding: 5px;
  border: 2px solid #1a8cd8;
  border-radius: 5px;
  color: #555;
  font-size: 13px;

  &:hover {
    background-color: #1a8cd8;
    color: white;
  }
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  border: 2px solid #1a8cd8;
  border-radius: 4px;
  text-align: justify;
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
  border: 2px solid #1a8cd8;
  border-radius: 4px;
  background-color: white;

  &:hover {
    background-color: #1a8cd8;
    color: white;
  }
`;
