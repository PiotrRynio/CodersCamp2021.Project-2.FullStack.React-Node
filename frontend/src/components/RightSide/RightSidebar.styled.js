import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  top: 56px;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Subscriptions = styled.h4`
  font-size: 36px;
`;
