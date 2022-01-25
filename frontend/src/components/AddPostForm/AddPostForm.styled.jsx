import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 1em;
  background-color: #8af;
  border: 1px solid #68f;
  border-radius: 20px;

  * {
    margin: 3px 0px;
  }
`;

export const FormTitle = styled.h2`
  height: 30px;
  margin: 10px;

  color: #cdf;
  text-shadow: 0 0 3px #456, 0 0 5px #34f;
  font-size: 1.5em;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
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

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  border-color: rgba(0, 0, 0, 0.52);

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
