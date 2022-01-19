import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 55px 15px 30px;
  background-color: white;
  z-index: 1;
`;

export const TopBarLogo = styled(Link)`
  font-size: 48px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const TopBarLogoMarked = styled.span`
  color: #1a8cd8;
`;

export const TopBarSearch = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
  transition: width 3s;

  &:focus {
    width: 300px;
  }
`;
