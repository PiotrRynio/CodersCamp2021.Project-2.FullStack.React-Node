import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  width: 20%;
  background-color: #f5f5f5;
  padding: 30px 20px;
  border-radius: 10px;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li``;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  height: 100px;
  font-size: 36px;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #1a8cd8;
  }
`;

export const NavIcon = styled.div`
  padding-right: 20px;
`;

export const NavButton = styled.button``;

export const NavText = styled.p`
  @media (max-width: 1200px) {
    display: none;
  }
`;
