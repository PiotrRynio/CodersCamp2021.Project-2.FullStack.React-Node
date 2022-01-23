import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  width: 60%;
  height: 100%;
`;

export const Logo = styled.h1`
  color: black;
  font-size: 96px;
`;

export const LogoSpan = styled.span`
  color: #1a8cd8;
`;

export const FormText = styled.p`
  font-size: 48px;
  text-align: center;
`;

export const FormEmail = styled.input`
  margin-top: 10px;
  width: 434px;
  padding: 10px 15px;
  border-radius: 15px;
`;

export const FormID = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const FormPassword = styled.input`
  margin-top: 10px;
  width: 434px;
  padding: 10px 15px;
  border-radius: 15px;
`;

export const FormPassword2 = styled.input`
  margin-top: 10px;
  width: 434px;
  padding: 10px 15px;
  border-radius: 15px;
`;

export const FormButtons = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const FormLink = styled(Link)``;

export const FormSubmit = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  background-color: #1a8cd8;
  border: 1px solid #1a8cd8;
  border-radius: 15px;
  font-size: 26px;
  cursor: pointer;
  color: white;
  transition: 0.2s ease-in-out;
`;

export const FormLogIn = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 26px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: black;
  }
`;
