import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 1em;
  border-radius: 20px;
  background-color: #bbc;

  * {
    margin: 3px 0px;
  }
`;

export const FormTitle = styled.h2`
  height: 30px;
  margin: 10px;

  color: gray;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
`;

export const TitleInput = styled.input`
  width: 80%;
  height: 22px;
  float: left;

  border-radius: 10px;
  border: 1px solid #aab;

  &:hover {
    border: 1px solid #48f;
  }
`;

export const Icon = styled.div`
  #TODO waiting for icon picker
  
`;

export const MessageInput = styled.input`
  height: 6em;

  border-radius: 12px;
  border: 1px solid #aab;

  &:hover {
    border: 1px solid #47f;
  }
`;

export const SubmitInput = styled.input`
  border-radius: 10px;
  border: 1px solid #aab;
  color: gray;
  #TODO waiting for the button component
`;
