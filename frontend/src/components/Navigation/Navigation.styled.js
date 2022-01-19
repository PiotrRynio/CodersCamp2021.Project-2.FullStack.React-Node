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

  @media (max-width: 768px) {
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: 56px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  list-style: none;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
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
  @media (max-width: 768px) {
    height: 100%;
    align-items: stretch;
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
