import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FormTitle = styled.h1`
  width: 250px;
  padding-left: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const MarkedTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const BoardTitleInput = styled.input`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const StyledIconPicker = styled.div`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: #555;
  font-size: 13px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  text-align: justify;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledSelect = styled.select`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledButton = styled.button`
  align-self: center;
  margin-top: 10px;
  padding: 5px 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border: 2px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;
