import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  width: 50%;
  height: 30px;
  border: none;
  background-color: ${({ theme, isSet }) => (isSet ? theme.colors.primary : '#f5f5f5')};
  color: ${({ theme, isSet }) => (isSet ? theme.colors.secondary : '#000000')};
`;
