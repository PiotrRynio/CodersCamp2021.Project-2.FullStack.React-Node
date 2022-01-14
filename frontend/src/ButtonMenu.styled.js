import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
    &:hover > :nth-child(-n+3) {
      filter: brightness(0.8)
    }
`

export const Dot = styled.div`
  height: 5px;
  width: 5px;
  margin-left: 2px;
  display: inline-block;
  background-color: #bbb;
  border-radius: 50%;
  transition: filter 0.15s ease-out;
`