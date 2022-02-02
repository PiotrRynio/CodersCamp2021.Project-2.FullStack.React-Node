import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainSection = styled.div`
  position: relative;
  width: 55%;
  margin-top: 56px;
  background-color: #f5f5f5;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 0;
    padding-top: 20px;
    width: 100%;
    height: 100vh;
    background-color: white;
    border-top: 1px solid #f5f5f5;
    border-radius: 0;
  }
`;
