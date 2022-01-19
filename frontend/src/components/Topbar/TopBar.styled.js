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

  @media (max-width: 768px) {
    position: relative;
    padding: 10px 0 0 0;
    flex-direction: column;
    height: 100px;
  }
`;

export const TopBarLogo = styled(Link)`
  font-size: 48px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TopBarLogoMarked = styled.span`
  color: #1a8cd8;
`;

export const TopBarSearch = styled.input`
  padding: 5px 10px;
  border-radius: 10px;

  &:focus {
    width: 300px;
  }

  @media (max-width: 768px) {
    &:focus {
      width: 250px;
    }
  }
`;
