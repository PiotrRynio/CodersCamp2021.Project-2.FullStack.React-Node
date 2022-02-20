import styled from 'styled-components';

export const StyledDropdown = styled.div`
  position: absolute;
  top: calc(0% + 15px);
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 160px;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #fff;

  @media ${({ theme }) => theme.breakpoints.md} {
    top: calc(0% + 21px);
    min-width: 240px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    top: calc(0% + 28px);
    min-width: 300px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    top: calc(0% + 35px);
    min-width: 400px;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0px 6px;
  border-radius: 5px;
  color: #2c2c2c;
  font-weight: lighter;
  cursor: pointer;
  transition: background 0.15s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    background: #f8f8f8ff;
  }

  &:hover > :first-child {
    color: #2c2c2c;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 67.5px;
    font-size: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    min-height: 85px;
    padding: 0 10px;
    font-size: 25px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    min-height: 102.5px;
    font-size: 30px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #e1e1e1;
  color: #bbb;
  transition: color 0.15s ease-in-out;

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 53px;
    min-width: 53px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    min-height: 66px;
    min-width: 66px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    min-height: 80px;
    min-width: 80px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: transparent;
  z-index: 2;
`;
