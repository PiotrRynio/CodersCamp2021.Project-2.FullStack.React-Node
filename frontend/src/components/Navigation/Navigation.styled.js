import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  width: 20%;
  padding: 30px 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  list-style: none;
  cursor: pointer;
`;

export const NavItem = styled.li``;

export const NavLinks = styled(Link)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  font-size: 36px;
  color: black;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #1a8cd8;
  }
`;

export const NavIcon = styled.div`
  padding-right: 20px;
  color: #1a8cd8;
`;

export const NavButton = styled.button``;

export const NavText = styled.p`
  @media (max-width: 1400px) {
    display: none;
  }
`;
