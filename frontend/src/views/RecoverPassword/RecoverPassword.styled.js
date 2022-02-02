import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 96px;
`;

export const RecoverPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

export const LogoSpan = styled.span`
  color: #1a8cd8;
`;

export const FormText = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;

export const EmailPlaceholder = styled.input`
  margin-top: 10px;
  width: 434px;
  padding: 10px 15px;
  border-radius: 15px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #1a8cd8;
  border: 1px solid #1a8cd8;
  border-radius: 15px;
  font-size: 26px;
  cursor: pointer;
  color: white;
`;
