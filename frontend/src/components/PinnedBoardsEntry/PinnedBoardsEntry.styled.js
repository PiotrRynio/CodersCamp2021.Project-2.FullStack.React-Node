import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 2.5em;
  border-radius: 16px;
  background-color: white;
  margin-top: 8px;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-top: 2px;
  margin-left: 2px;
  border: 1px solid gray;
`;

export const Name = styled.span`
  color: black;
  font-size: 1em;
  font-weight: 300;
  padding-top: 10px;
  padding-left: 4px;
`;
