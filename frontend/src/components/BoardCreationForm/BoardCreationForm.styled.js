import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: left;
`;

export const FormTitle = styled.h1`
  width: 230px;
  padding-left: 5px;
  padding-bottom: 2px;
  margin-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const MarkedTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const BoardTitleInput = styled.input`
  height: 40px;
  padding: 5px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus {
    outline: 1px solid #1a8cd8;
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
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: #555;
  font-size: 13px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 5px;
  margin-bottom: 6px;
  border-radius: 4px;
  text-align: justify;
  border-color: hsl(0, 0%, 80%);
  font-family: ${({ theme }) => theme.fontFamily.primary};
  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export const StyledSelect = styled.select`
  height: 40px;
  padding: 5px;
  margin-bottom: 6px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus {
    outline: 1px solid #1a8cd8;
  }
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.primary};
  align-self: flex-end;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Error = styled.p`
  color: #cc1111;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  padding-bottom: 12px;
`;
