import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 40%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 60%;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Logo = styled(Link)`
  color: black;
  font-size: 46px;
  text-decoration: none;
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 96px;
  }
`;

export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const FormText = styled.p`
  font-size: 36px;
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 48px;
  }
`;

export const FormEmail = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 15px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 434px;
  }
`;

export const FormID = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const FormPassword = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 15px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 434px;
  }
`;

export const FormButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  gap: 5px;
`;

export const FormLink = styled(Link)``;

export const FormSubmit = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s ease-in-out;
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 26px;
  }
`;

export const FormLogIn = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid black;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: black;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 26px;
  }
`;

export const RecoverPassword = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
`;

export const RecoverPasswordHint = styled.p`
  color: black;
`;

export const RecoverLink = styled(Link)`
  text-decoration: none;
  color: #1a8cd8;
`;
