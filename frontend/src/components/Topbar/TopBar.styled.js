import styled from 'styled-components';

export const TopBarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

export const TopBarLogo = styled.h1`
  font-size: 48px;
  cursor: pointer;
  margin: 0;
`;

export const TopBarLogoSpan = styled.span`
  color: #1a8cd8;
`;

export const TopBarSearch = styled.input`
  margin-right: 15px;
  padding: 5px 10px;
  border-radius: 10px;
  transition: 3s ease-in-out;
  &:focus {
    width: 300px;
  }
`;
