import styled from 'styled-components';

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  border: 0.5px solid #1c1c1c;
  border-radius: 20px;
  background: transparent;
  color: #1c1c1c;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
