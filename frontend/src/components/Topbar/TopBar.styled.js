import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  padding: 15px 55px 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 100000;
`;

export const TopBarLogo = styled(Link)`
  font-size: 48px;
  text-decoration: none;
  color: black;
  cursor: pointer;
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
