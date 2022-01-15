import styled from 'styled-components';

export const MainContainer = styled.main`
  height: 100%;
  width: 60%;
  background-color: #f5f5f5;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Main = styled.h1`
  font-size: 36px;
  height: 200vh;
`;
